(function () {
    var addUserVue = new Vue({
        el: '#app',
        data: {
            heading: 'Vue Select Cascade',
            make: null,
            model: null,
            makes_options: [{
                    text: "Honda",
                    id: 1
                },
                {
                    text: "Toyota",
                    id: 2
                },
                {
                    text: "Nissan",
                    id: 3
                },
                {
                    text: "Suzuki",
                    id: 4
                }
            ],
            model_options: {
                1: [{
                    text: 'Accord',
                    id: 1
                }, {
                    text: 'Civic',
                    id: 2
                }],
                2: [{
                    text: 'Corolla',
                    id: 1
                }, {
                    text: 'Hi Ace',
                    id: 2
                }],
                3: [{
                    text: 'Altima',
                    id: 1
                }, {
                    text: 'Zuke',
                    id: 2
                }],
                4: [{
                    text: 'Alto',
                    id: 1
                }, {
                    text: 'Swift',
                    id: 2
                }]
            }
        }
    });

    var addUserVue2 = new Vue({
        components: {
            Multiselect: window.VueMultiselect.default
        },
        el: '#app2',
        data: {
            modelIsDisabled: true,
            heading: 'Vue Multiselect Library',
            make: null,
            makes_options: [],
            model: null,
            model_options: [],
            suite: [],
            suite_list: [],
            collections: [],
            collection_dropdowns: {},
            suiteSelections: [],
            output: null
        },
        methods: {
            dispatchAction: function (actionName) {
                var self = this;
                console.log(actionName.text);

                var sameplData = [{
                    make: 'Honda',
                    text: 'Accord',
                    id: 1
                }, {
                    make: 'Honda',
                    text: 'Civic',
                    id: 2
                }, {
                    make: 'Toyota',
                    text: 'Corolla',
                    id: 1
                }, {
                    make: 'Toyota',
                    text: 'Hi Ace',
                    id: 2
                }, {
                    make: 'Nissan',
                    text: 'Altima',
                    id: 1
                }, {
                    make: 'Nissan',
                    text: 'Zuke',
                    id: 2
                }, {
                    make: 'Suzuki',
                    text: 'Alto',
                    id: 1
                }, {
                    make: 'Suzuki',
                    text: 'Swift',
                    id: 2
                }];

                var newItems = sameplData.filter(function (item) {
                    return item.make === actionName.text;
                });

                self.model_options = newItems;
                self.modelIsDisabled = false;

                console.log(self.model_options);
            },
            updateUserSuiteAccess: function (suiteValue) {
                var self = this;
                console.log(suiteValue.value);

                switch (suiteValue.value) {
                    case 'ALL':
                        self.collections = [{
                                displayName: 'Chains',
                                Cascading: false,
                                id: 1
                            },
                            {
                                displayName: 'Brands',
                                Cascading: false,
                                id: 2
                            },
                            {
                                displayName: 'Properties',
                                Cascading: false,
                                id: 3
                            },
                            {
                                displayName: 'Regions',
                                Cascading: true,
                                id: 4
                            }
                        ];
                        self.collection_dropdowns = {
                            'Chains': [{
                                    displayName: 'Hotel1',
                                    value: 'test1'
                                },
                                {
                                    displayName: 'Hotel2',
                                    value: 'test2'
                                },
                                {
                                    displayName: 'Hotel3',
                                    value: 'test3'
                                }
                            ],
                            'Brands': [{
                                    displayName: 'Hotel4',
                                    value: 'test4'
                                },
                                {
                                    displayName: 'Hotel5',
                                    value: 'test5'
                                },
                                {
                                    displayName: 'Hotel6',
                                    value: 'test6'
                                }
                            ],
                            'Properties': [{
                                    displayName: 'Hotel7',
                                    value: 'test7'
                                },
                                {
                                    displayName: 'Hotel8',
                                    value: 'test8'
                                },
                                {
                                    displayName: 'Hotel9',
                                    value: 'test9'
                                }
                            ],
                            'Regions': [{
                                    displayName: 'Hotel10',
                                    value: 'test10'
                                },
                                {
                                    displayName: 'Hotel11',
                                    value: 'test11'
                                },
                                {
                                    displayName: 'Hotel12',
                                    value: 'test12'
                                }
                            ]
                        }
                        break;
                    case 'CRM':
                        self.collections = [{
                            displayName: 'Make / Models',
                            Cascading: true
                        }];
                        break;
                    case 'SALES':
                        self.collections = [{
                                displayName: 'Chains',
                                Cascading: false,
                                id: 1
                            },
                            {
                                displayName: 'Brands',
                                Cascading: false,
                                id: 2
                            },
                            {
                                displayName: 'Properties',
                                Cascading: false,
                                id: 3
                            }
                        ];
                        self.collection_dropdowns = {
                            'Chains': [{
                                    displayName: 'Hotel1',
                                    value: 'test1'
                                },
                                {
                                    displayName: 'Hotel2',
                                    value: 'test2'
                                },
                                {
                                    displayName: 'Hotel3',
                                    value: 'test3'
                                }
                            ],
                            'Brands': [{
                                    displayName: 'Hotel4',
                                    value: 'test4'
                                },
                                {
                                    displayName: 'Hotel5',
                                    value: 'test5'
                                },
                                {
                                    displayName: 'Hotel6',
                                    value: 'test6'
                                }
                            ],
                            'Properties': [{
                                    displayName: 'Hotel7',
                                    value: 'test7'
                                },
                                {
                                    displayName: 'Hotel8',
                                    value: 'test8'
                                },
                                {
                                    displayName: 'Hotel9',
                                    value: 'test9'
                                }
                            ]
                        }
                        break;
                }
            },
            init: function () {
                var self = this;
                self.makes_options = [{
                        text: "Honda",
                        id: 1
                    },
                    {
                        text: "Toyota",
                        id: 2
                    },
                    {
                        text: "Nissan",
                        id: 3
                    },
                    {
                        text: "Suzuki",
                        id: 4
                    }
                ];

                self.suite_list = [{
                        text: 'Sales & CRM Suites',
                        value: 'ALL'
                    },
                    {
                        text: 'CRM Suite',
                        value: 'CRM'
                    },
                    {
                        text: 'Sales Suite',
                        value: 'SALES'
                    }
                ];

                console.log('init vue data');
            },
            buildUserAccessList: function () {
                var self = this;
                self.output = [];
                //var chains = self.suiteSelections['Chains'];
                for (var prop in self.suiteSelections) {
                    self.output.push(self.suiteSelections[prop]);
                }
                // var chaintestextract = chaintest.map(function (item) {
                //     return item.displayName;
                // })
                //console.log(self.suiteSelections);
                //console.log(chains);
                //console.log(chaintest);
                self.output.push(self.make);
                self.output.push(self.model);
            }
        }
    })

    addUserVue2.init();

})();