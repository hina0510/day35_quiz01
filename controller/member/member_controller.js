const service = require("../../service/member/member_service");
const login = (req, res)=>{
    res.render("member/login");
}
const loginCheck = (req, res)=>{
    const result = service.loginCheck(
        req.param("id"), req.param("name"));
    if(result === 0)
        res.redirect("/member/list");
    res.redirect("/member/login");
}
const list = (req, res)=>{
    res.render("member/list", {list:service.getList()});//member를 list로 정의해 사용
}
const info = (req, res)=>{
    res.render("member/info", {info:service.getInfo(req.param("id"))});
}
module.exports = {login, loginCheck, list, info};