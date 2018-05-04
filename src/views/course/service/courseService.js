import API from '../../../api/API'
const api = new API()

export default {
	methods: {
		getCourseList(token, classid) {
			return api.post(`/saxophone1/saxo/useroneClass?webtoken=${token}&classid=${classid}`)
				.then(res => {
					return res.data
				})
				.catch(err => {
				});
		},
		getVideo() {
			return api.get(`/saxophone1/notoken/userMain`)
				.then(res => {
					this.videoList = res.data.data.goodclass
				})
				.catch(err => {
				});
		}
	}
}