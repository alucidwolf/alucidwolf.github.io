(function () {

    Vue.component('todo-item', {
        template: `<li>
        {{title}}
        <button class="btn btn-primary btn-xs" v-on:click="$emit('remove')">Remove</button>
        </li>`,
        props: ['title']
    });

    var addUserVue = new Vue({
        el: '#app',
        data: {
            heading: 'Vue Select Cascade',
            make: null,
            model: null,
            makes_options: [{
                    text: "Region Property 1",
                    id: 1
                },
                {
                    text: "Region Property 2",
                    id: 2
                },
                {
                    text: "Region Property 3",
                    id: 3
                },
                {
                    text: "Region Property 4",
                    id: 4
                }
            ],
            model_options: {
                1: [{
                    text: 'NA',
                    id: 1
                }, {
                    text: 'EU',
                    id: 2
                }],
                2: [{
                    text: 'NA',
                    id: 1
                }, {
                    text: 'EU',
                    id: 2
                }],
                3: [{
                    text: 'NA',
                    id: 1
                }, {
                    text: 'EU',
                    id: 2
                }],
                4: [{
                    text: 'NA',
                    id: 1
                }, {
                    text: 'EU',
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
            newTodoText: '',
            todos: [{
                id: 1,
                title: 'Do the dishes',
            }, {
                id: 2,
                title: 'Take out the trash'
            }, {
                id: 3,
                title: 'Mow the lawn'
            }],
            nextTodoId: 4,

            modelIsDisabled: true,
            heading: 'Vue Multiselect Library',
            region_option_selected: null,
            region_options: [],
            region_selected: null,
            regions: [],
            suite: [],
            suite_list: [],
            collections: [],
            collection_dropdowns: {},
            suiteSelections: [],
            output: null
        },
        methods: {
            addNewTodo: function () {
                this.todos.push({
                    id: this.nextTodoId++,
                    title: this.newTodoText
                })
                this.newTodoText = ''
            },
            dispatchAction: function (actionName) {
                var self = this;
                //console.log(actionName.text);

                var sameplData = [{
                    region_option_selected: 'Region Property 1',
                    text: 'NA',
                    id: 1
                }, {
                    region_option_selected: 'Region Property 1',
                    text: 'EU',
                    id: 2
                }, {
                    region_option_selected: 'Region Property 2',
                    text: 'NA',
                    id: 1
                }, {
                    region_option_selected: 'Region Property 2',
                    text: 'EU',
                    id: 2
                }, {
                    region_option_selected: 'Region Property 3',
                    text: 'NA',
                    id: 1
                }, {
                    region_option_selected: 'Region Property 3',
                    text: 'EU',
                    id: 2
                }, {
                    region_option_selected: 'Region Property 4',
                    text: 'NA',
                    id: 1
                }, {
                    region_option_selected: 'Region Property 4',
                    text: 'EU',
                    id: 2
                }];

                var newItems = sameplData.filter(function (item) {
                    return item.region_option_selected === actionName.text;
                });

                self.regions = newItems;
                self.modelIsDisabled = false;

                //console.log(self.regions);
            },
            updateUserSuiteAccess: function (suiteValue) {
                var self = this;
                //console.log(suiteValue.value);

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
                                    displayName: 'Chain 1',
                                    value: 'test1',
                                    outputLocation: 'Chain'
                                },
                                {
                                    displayName: 'Chain 2',
                                    value: 'test2',
                                    outputLocation: 'Chain'
                                },
                                {
                                    displayName: 'Chain 3',
                                    value: 'test3',
                                    outputLocation: 'Chain'
                                }
                            ],
                            'Brands': [{
                                    displayName: 'Brand 1',
                                    value: 'test4',
                                    outputLocation: 'Brand'
                                },
                                {
                                    displayName: 'Brand 2',
                                    value: 'test5',
                                    outputLocation: 'Brand'
                                },
                                {
                                    displayName: 'Brand 3',
                                    value: 'test6',
                                    outputLocation: 'Brand'
                                }
                            ],
                            'Properties': [{
                                    displayName: 'Property 1',
                                    value: 'test7',
                                    outputLocation: 'Property'
                                },
                                {
                                    displayName: 'Propert 2',
                                    value: 'test8',
                                    outputLocation: 'Property'
                                },
                                {
                                    displayName: 'Property 3',
                                    value: 'test9',
                                    outputLocation: 'Property'
                                }
                            ],
                            'Regions': [{
                                    displayName: 'Region Property 1',
                                    value: 'test10',
                                    outputLocation: 'Region'
                                },
                                {
                                    displayName: 'Region Property 2',
                                    value: 'test11',
                                    outputLocation: 'Region'
                                },
                                {
                                    displayName: 'Region Property 3',
                                    value: 'test12',
                                    outputLocation: 'Region'
                                }
                            ]
                        }
                        break;
                    case 'CRM':
                        self.collections = [{
                            displayName: 'region_option_selected / Models',
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
                                    displayName: 'Chain 1',
                                    value: 'test1',
                                    outputLocation: 'Chain'
                                },
                                {
                                    displayName: 'Chain 2',
                                    value: 'test2',
                                    outputLocation: 'Chain'
                                },
                                {
                                    displayName: 'Chain 3',
                                    value: 'test3',
                                    outputLocation: 'Chain'
                                }
                            ],
                            'Brands': [{
                                    displayName: 'Brand 1',
                                    value: 'test4',
                                    outputLocation: 'Brand'
                                },
                                {
                                    displayName: 'Brand 2',
                                    value: 'test5',
                                    outputLocation: 'Brand'
                                },
                                {
                                    displayName: 'Brand 3',
                                    value: 'test6',
                                    outputLocation: 'Brand'
                                }
                            ],
                            'Properties': [{
                                    displayName: 'Property 1',
                                    value: 'test7',
                                    outputLocation: 'Property'
                                },
                                {
                                    displayName: 'Propert 2',
                                    value: 'test8',
                                    outputLocation: 'Property'
                                },
                                {
                                    displayName: 'Property 3',
                                    value: 'test9',
                                    outputLocation: 'Property'
                                }
                            ]
                        }
                        break;
                }
            },
            init: function () {
                var self = this;
                self.region_options = [{
                        text: "Region Property 1",
                        id: 1,
                        outputLocation: 'Region Property'
                    },
                    {
                        text: "Region Property 2",
                        id: 2,
                        outputLocation: 'Region Property'
                    },
                    {
                        text: "Region Property 3",
                        id: 3,
                        outputLocation: 'Region Property'
                    },
                    {
                        text: "Region Property 4",
                        id: 4,
                        outputLocation: 'Region Property'
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

                //console.log('init vue data');
            },
            buildUserAccessList: function () {
                var self = this;
                self.output = {
                    'Chains': [],
                    'Brands': [],
                    'Properties': [],
                    'Region Property': [],
                    'Regions': []
                };

                console.log(self.suiteSelections);

                // Loop through each property inside object ...
                for (var prop in self.suiteSelections) {
                    var insideProp = self.suiteSelections[prop];

                    // ... inside each object extract the name and push into output array
                    for (var p in insideProp) {
                        switch (insideProp[p].outputLocation) {
                            case 'Chain':
                                self.output['Chains'].push(insideProp[p].displayName);
                                break;
                            case 'Brand':
                                self.output['Brands'].push(insideProp[p].displayName);
                                break;
                            case 'Property':
                                self.output['Properties'].push(insideProp[p].displayName);
                                break;
                        }
                    }

                }

                self.output['Region Property'].push(self.region_option_selected.text);

                for (var i in self.region_selected) {
                    self.output['Regions'].push(self.region_selected[i].text);
                }

            }
        }
    })

    addUserVue2.init();

})();
