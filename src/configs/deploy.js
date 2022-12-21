//database constains
const DB_host = "localhost";
const DB_user = "root";
const DB_pass = "1234";
const DB_Database = "CCSUSER";

//server constains
const Server_port = 3000;

//main constains
const kaf_cilientID = "ctm-etax-lambda1";
const kaf_Broker = "pkc-l9wvm.ap-southeast-1.aws.confluent.cloud:9092";
const kaf_Mechennism = "PLAIN";
const kaf_User_del = "TMOEIXBXFCVFJA62";
const kaf_Pass_del = "OsXk4U1TcKcsewydopZOSWZmUDpkgDc++kWGzHELPRgv8CKkV7LsXaynSnVEmTM2";
const kaf_Topic_con = "aws.alm.member.cancel.confirm.0";
const kaf_channel = "CN29-CCM";


const queryParamsGRCM = "SELECT * FROM CANCEL_MEMBER_CUSTOMER WHERE MOVE_FLAG = ?"
const queryParamsMCDC = "INSERT INTO DELETE_CONSENT SELECT * FROM CONSENT WHERE SYSTEM_KEY_ID = ?"
const queryParamsDMCDC = "DELETE FROM CONSENT WHERE SYSTEM_KEY_ID = ?"
const queryParamsMTDT = "INSERT INTO DELETE_TERM SELECT * FROM TERM WHERE SYSTEM_KEY_ID = ?"
const queryParamsDMTDT = "DELETE FROM TERM WHERE SYSTEM_KEY_ID = ?"
const queryParamsMSDS = "INSERT INTO DELETE_SYSTEM_KEY SELECT * FROM SYSTEM_KEY WHERE SYSTEM_KEY_ID = ?"
const queryParamsDMSDS = "DELETE FROM SYSTEM_KEY WHERE SYSTEM_KEY_ID = ?"
const queryParamsUMFC = 'UPDATE CANCEL_MEMBER_CUSTOMER SET MOVE_FLAG = "Y" WHERE SYSTEM_KEY_ID = ? '


//export module
module.exports = {
  DB_Database,
  DB_host,
  DB_pass,
  DB_user,
  kaf_Broker,
  kaf_Mechennism,
  kaf_Pass_del,
  kaf_Topic_con,
  kaf_User_del,
  kaf_cilientID,
  kaf_channel,
  queryParamsGRCM,
  queryParamsMCDC,
  queryParamsMSDS,
  queryParamsMTDT,
  queryParamsUMFC,
  queryParamsDMCDC,
  queryParamsDMSDS,
  queryParamsDMTDT,
  Server_port
};
