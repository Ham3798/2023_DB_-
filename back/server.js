const express = require('express');
const oracledb = require('oracledb');
const cors = require('cors');

const app = express();
const port = 3001;

// Oracle 데이터베이스 연결 정보
const dbConfig = {
  user: 'd201902769',
  password: '1111',
  connectString: '0.0.0.0:1521'
};

// CORS 설정
app.use(cors());

// GET /customer - 특정 cno 값과 동일한 고객 정보 조회
app.get('/customer/:cno/:password', (req, res) => {
  // 데이터베이스 연결
  oracledb.getConnection(dbConfig, (err, connection) => {
    if (err) {
      console.error(err.message);
      return;
    }

    const cno = req.params.cno;
    const password = req.params.password;

    connection.execute('SELECT * FROM customer WHERE cno = :cno and passwd = :password', [cno, password], (err, result) => {
      if (err) {
        console.error(err.message);
        connection.close();
        return;
      }

      // 일치하는 고객을 찾았을 때만 결과를 반환합니다.
      if (result.rows.length > 0 && result.rows[0][2] === password) {
        res.status(200).json(result.rows);
      } else {
        res.status(401).json({ error: '인증 실패' });
      }

      // 연결을 닫습니다.
      connection.close();
    });
  });
});

app.get('/getCar/:startDate/:endDate/:vehicleTypes', (req, res) => {
// const startDate = new Date('Sat Jun 03 2023');
// const endDate = new Date('Sat Jun 03 2023');
// var vehicleTypes = ['대형', '중형', '소형'];
const startDate = new Date(req.params.startDate).toISOString().split("T")[0];
const endDate = new Date(req.params.endDate).toISOString().split("T")[0];
let vehicleTypes = req.params.vehicleTypes;
vehicleTypes = vehicleTypes.replace(/\s/g, "");
vehicleTypes = vehicleTypes.split(",");
console.log(startDate, endDate, vehicleTypes);
var str;
for (let i = 0; i < vehicleTypes.length; i++) {
  const type = vehicleTypes[i];
  if (i === 0) {
    str = `VEHICLETYPE = \'${type}\'`;
  } else {
    str += ` or VEHICLETYPE = \'${type}\'`;
  }
}

vehicleTypes = str;
console.log(vehicleTypes);

  oracledb.getConnection(dbConfig, (err, connection) => {
    if (err) {
      console.error(err.message);
      return;
    }

    const query = `
    SELECT *
      FROM CARMODEL
      WHERE MODELNAME NOT IN (
        SELECT MODELNAME
        FROM RENTCAR
        WHERE MODELNAME IN (
          SELECT MODELNAME
          FROM CARMODEL
          WHERE ${vehicleTypes}
        )
        AND EXISTS (
          SELECT 1
          FROM RESERVE
          WHERE LICENSEPLATENO = RENTCAR.LICENSEPLATENO
            AND (
              STARTDATE <= TO_DATE('${endDate}', 'YYYY-MM-DD')
              AND ENDDATE >= TO_DATE('${startDate}', 'YYYY-MM-DD')
            )
        )
      )
    `;
    
    connection.execute(query, (err, result) => {
      if (err) {
        console.error(err.message);
        connection.close();
        return;
      }
      
      res.status(200).json(result.rows);

      connection.close();
    });
  });
});

// 잘못된 요청에 대한 응답
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});