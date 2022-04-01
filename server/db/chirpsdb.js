import { Query } from "./index";


const all = async () => Query('SELECT * FROM chirps');
const one = async(id) => Query('SELECT * FROM chirps WHERE id =?',[id]);
const insert = async(userid,content,location) => Query("INSERT INTO chirps(userid, content, location) Values (?,?,?)",[userid,content,location]);
const remove = async(id) => Query('DELETE FROM chirps WHERE id=?',[id]);
const update = async (id,content) =>Query('UPDATE chirps SET content=? WHERE chirps.id=?',[content,id]);
export default{
    all,
    one,
    insert,
    remove,
    update
};