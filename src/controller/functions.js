const pool = require("../database/database");
const {queryParamsDMCDC,
    queryParamsDMSDS,
    queryParamsDMTDT,
    queryParamsGRCM,
    queryParamsMCDC,
    queryParamsMSDS,
    queryParamsMTDT,
    queryParamsUMFC} 
    = require("../configs/local")

 const getRecordFromCancelMemberCustomer = async()=> {
    return await pool.query(queryParamsGRCM, ['N']);
}
const moveConsentToDeleteConsent= async(SYSTEM_KEY_ID)=> {
    let rs = await pool.query(queryParamsMCDC, [SYSTEM_KEY_ID]);
    if (rs.affectedRows > 0) {
        let result = await pool.query(queryParamsDMCDC, [SYSTEM_KEY_ID]);
        if (result.affectedRows > 0) {
            return 1; // มีการย้ายข้อมูลจาก table CONSENT ไป table DELETE_CONSENT
        } else {
            return 0; // ไม่มีการย้ายข้อมูลจาก table CONSENT ไป table DELETE_CONSENT
        }
    } else {
        return 0; // ไม่มีการย้ายข้อมูลจาก table CONSENT ไป table DELETE_CONSENT
    } 
}

const moveTermToDeleteTerm = async(SYSTEM_KEY_ID)=> {
    let rs = await pool.query(queryParamsMTDT, [SYSTEM_KEY_ID]);
    if (rs.affectedRows > 0) {
        let result = await pool.query(queryParamsDMTDT, [SYSTEM_KEY_ID]); //fixed DELETE_TERM to TERM
        if (result.affectedRows > 0) {
            return 1; // มีการย้ายข้อมูลจาก table TERM table ไป table DELETE_TERM
        } else {
            return 0; // ไม่มีการย้ายข้อมูลจาก table TERM table ไป table DELETE_TERM
        }
    } else {
        return 0; // ไม่มีการย้ายข้อมูลจาก table TERM table ไป table DELETE_TERM
    }
}

const moveSystemKeyToDeleteSystemKey = async(SYSTEM_KEY_ID) =>{
    let rs = await pool.query(queryParamsMSDS, [SYSTEM_KEY_ID]);
    if (rs.affectedRows > 0) {
        let result = await pool.query(queryParamsDMSDS, [SYSTEM_KEY_ID]);
        if (result.affectedRows > 0) {
            return 1; // มีการย้ายข้อมูลจาก table SYSTEM_KEY table ไป table DELETE_SYSTEM_KEY
        } else {
            return 0; // ไม่มีการย้ายข้อมูลจาก table SYSTEM_KEY table ไป table DELETE_SYSTEM_KEY
        }
    } else {
        return 0; // ไม่มีการย้ายข้อมูลจาก table SYSTEM_KEY table ไป table DELETE_SYSTEM_KEY
    }
}

const updateMoveFlagOnCancelMemberCustomer = async(SYSTEM_KEY_ID) =>{
    let rs = await pool.query(queryParamsUMFC, [SYSTEM_KEY_ID]);
   if (rs.affectedRows > 0) {
       return 1; // Update successfully.
   } else {
       return 0; // No update.
   }
}

module.exports = {
getRecordFromCancelMemberCustomer,
moveConsentToDeleteConsent,
moveSystemKeyToDeleteSystemKey,
moveTermToDeleteTerm,
updateMoveFlagOnCancelMemberCustomer
};