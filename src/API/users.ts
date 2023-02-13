import { axiosAuthService } from "./axios";


export async function getUserDetails() {
    return axiosAuthService.get(`/users`)
    .then((res: any) => {
        console.log("Users Details", res?.data)
        return res.data;
    }).catch((err:any) => console.log(err))
}

export async function deleteUsers(id:any){
    return axiosAuthService.delete(`/user/${id}`,)
    .then((res:any)=>{
        return res.data;
    }).catch((err:any)=>console.log(err))

}

export async function saveUserChanges(item:any){
    console.log("Inside Update Method",item._id)
    return axiosAuthService.patch(`/user/${item._id}`,
    {
        "_id": item._id,
        "firstName":  item.firstName,
        "lastName": item.lastName,
        "phoneNumber":item.phoneNumber ,
        "age": item.age,
        "createdAt":item.createdAt ,
        "updatedAt": item.updatedAt
    })
    .then((res:any)=>{
        return res.data;
    }).catch((err:any)=>console.log(err))
}

export async function insertUsers(records:any)
{   
console.log("Records",records)
    return axiosAuthService.post(`/user/create`,records)
    .then ((res:any)=>{
        console.log("Details Data",records);
        
        return res.data;
    }).catch((err:any)=>console.log(err))
} 
