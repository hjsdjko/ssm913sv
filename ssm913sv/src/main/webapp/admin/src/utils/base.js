const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm913sv/",
            name: "ssm913sv",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm913sv/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "微信小程序的网上商城"
        } 
    }
}
export default base
