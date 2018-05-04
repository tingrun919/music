import API from '../../../api/API'
const api = new API()

export default {
	methods: {
		getHistoryList(page) {
			return api.post(`/saxophone1/notoken/userMainAllClass?page=${page}`)
				.then(res => {
					this.courseList = res.data.data
				})
				.catch(err => {
					alert('服务器异常，请稍后重试！')
				});
		},
	}
}