import Main from '@/views/Main.vue';
export const appRouter = {
    path: '/',
	name: 'main',
	redirect: '/index',
	component: Main,
	children: [
		{ path: 'index', title: 'index', name: 'index', component: resolve => { require(['@/views/index/index/index.vue'], resolve); } },
		{ path: 'teacher/:id', title: 'teacher', name: 'teacher', component: resolve => { require(['@/views/teacher/teacher.vue'], resolve); } },
		{ path: 'course/:id', title: 'course', name: 'course', component: resolve => { require(['@/views/course/course.vue'], resolve); } },
		{ path: 'history-course', title: 'history-course', name: 'history-course', component: resolve => { require(['@/views/history-course/history-course.vue'], resolve); } },
		{ path: 'all-video', title: 'all-video', name: 'all-video', component: resolve => { require(['@/views/all-video/all-video.vue'], resolve); } },
		{ path: 'live', title: 'live', name: 'live', component: resolve => { require(['@/views/live/live.vue'], resolve); } },
		{ path: 'login', title: 'login', name: 'login', component: resolve => { require(['@/views/login/login.vue'], resolve); } },
		{ path: 'signup', title: 'signup', name: 'signup', component: resolve => { require(['@/views/signup/signup.vue'], resolve); } },
		{ path: 'video/:id', title: 'video', name: 'video', component: resolve => { require(['@/views/playVideo/playvideo.vue'], resolve); } },
    ]
}

export const routers = [
	appRouter,
]