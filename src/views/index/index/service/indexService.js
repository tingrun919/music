import API from '../../../../api/API'
const api = new API()

export default {
	methods: {
		getIndexData() {
			return api.get(`/saxophone1/notoken/userMain`)
				.then(res => {
					console.log(res.data,123)
					this.banner = res.data.data.banner
					this.curriculumClass = res.data.data.class
					this.goodClass = res.data.data.goodclass
					this.teacher = res.data.data.teacher
				})
				.catch(err => {
				});
		}
	}
}
