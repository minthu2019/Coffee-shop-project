export default{
    base : "/",
    build: {
        rollupOptions:{
            input:{
                main : "./index.html",
                "add-member": "./src/add-member.html",
                "all-coffee": "./src/all-coffee.html",
                member: "./src/member.html",
            }
        }
    }
}