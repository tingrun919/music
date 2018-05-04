import API from '../../../api/API'
const api = new API()

export default {
	methods: {
		getCurriculum(webtoken, aid, page) {
			return api.get(`/saxophone1/saxo/teachermain1?apporpc=app&webtoken=${webtoken}&aid=${aid}&page=${page}`)
				.then(res => {
					console.log(res.data,'data')
					this.userInfo = res.data.data.userinfo
					this.iffollow = res.data.data.iffollow
					this.teacherClass = res.data.data.class
				})
				.catch(err => {
				});
		}
	}
}
