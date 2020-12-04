Nova.booting((Vue, router, store) => {
  router.addRoutes([
    {
      name: 'currency-stats',
      path: '/currency-stats',
      component: require('./components/Tool'),
    },
  ])
})
