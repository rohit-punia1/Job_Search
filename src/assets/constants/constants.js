export const roleOptions=[ {
    label: "ENGINEERING",
    options: [
      { label: "Backend", value: "backend" },
      { label: "Frontend", value: "frontend" },
      { label: "Fullstack", value: "fullstack" },
      { label: "IOS", value: "ios" },
      { label: "Flutter", value: "flutter" },
      { label: "React Native", value: "react native" },
      { label: "Android", value: "android" },
      { label: "Tech Lead", value: "tech lead" },
      { label: "Dev-Ops", value: "dev-ops" },


    ]
  }]

  export const numberOfEmployeesOptions=[ 
      { label: "1-10", value: "1-10" },
      { label: "11-20", value: "11-20" },
      { label: "21-50", value: "21-50" },
      { label: "51-100", value: "51-100" },
      { label: "101-200", value: "101-200" },
      { label: "201-500", value: "201-500" },
      { label: "500+", value: "500+" },
  ]

  export const remoteOptions=[ 
    { label: "Remote", value: "Remote" },
    { label: "Hybrid", value: "Hybrid" },
    { label: "In-office", value: "In-office" },
]


export const experienceOptions=[...Array(10)].map((_,i)=>{
    return  { label: i+1, value: i+1 }
})

export const minBasePaySalaryoptions=[...Array(7)].map((_,i)=>{
    return  { label: `${i}L`, value: `${i}` }
})