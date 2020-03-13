// pages/treeTest/treeTest.js
Page({
  data: {
    value: [
      {
        title: 'a-一级节点',
        children: [
          {
            title: 'a-二级节点1',
            children: [
              {
                title: 'a-三级节点1',
                children: [
                  {
                    title: 'a-四级节点1'
                  }
                ]
              },
              {
                title: 'a-三级节点2'
              },
              {
                title: 'a-三级节点3'
              }
            ]
          },
          {
            title: 'a-二级节点2',
            children: [
              {
                title: 'a-三级节点1'
              },
              {
                title: 'a-三级节点2'
              }
            ]
          }
        ]
      },
      {
        title: 'b-一级节点',
        children: [
          {
            title: 'b-二级节点1',
            children: [
              {
                title: 'b-三级节点1'
              },
              {
                title: 'b-三级节点2'
              },
              {
                title: 'b-三级节点3'
              }
            ]
          },
          {
            title: 'b-二级节点2',
            children: [
              {
                title: 'b-三级节点1'
              },
              {
                title: 'b-三级节点2'
              }
            ]
          }
        ]
      }
    ],
    unnormalizedValue: [
      {
        id: 1,
        name: '扉页'
      },
      {
        id: 2,
        name: '版权页'
      },
      {
        id: 3,
        pid: 2,
        name: '《松江年鉴（2019）》编辑部'
      },
      {
        id: 4,
        name: '2018·松江'
      },
      {
        id: 5,
        name: '科创松江'
      },
      {
        id: 6,
        name: '人文松江'
      },
      {
        id: 7,
        name: '生态松江'
      },
      {
        id: 8,
        name: '宜居松江'
      },
      {
        id: 9,
        name: '改革开放40周年'
      },
      {
        id: 10,
        name: '编辑说明'
      },
      {
        id: 11,
        name: '2018年上海市松江区国民经济和社会发展统计公报'
      },
      {
        id: 12,
        name: '第一编 年度大事'
      },
      {
        id: 13,
        pid: 12,
        name: '1月'
      },
      {
        id: 14,
        pid: 12,
        name: '2月'
      },
      {
        id: 15,
        pid: 12,
        name: '3月'
      },
      {
        id: 16,
        pid: 12,
        name: '4月'
      },
      {
        id: 17,
        pid: 12,
        name: '5月'
      },
      {
        id: 18,
        pid: 12,
        name: '6月'
      },
      {
        id: 19,
        pid: 12,
        name: '7月'
      },
      {
        id: 20,
        pid: 12,
        name: '8月'
      },
      {
        id: 21,
        pid: 12,
        name: '9月'
      },
      {
        id: 22,
        pid: 12,
        name: '10月'
      },
      {
        id: 23,
        pid: 12,
        name: '11月'
      },
      {
        id: 23,
        pid: 12,
        name: '12月'
      },
      {
        id: 24,
        name: '第二编 报告解读'
      },
    ],
    unnormalizedValue2:[]
  },
  selThis(e) {
    console.log('index=' + e.detail.id);
    wx.navigateTo({
      url: '/pages/book-pages/book-page?id=' + e.detail.id,
    })
  },
  onLoad() {
    this.setData({
      unnormalizedValue2: this.data.unnormalizedValue
    },()=>{
      setTimeout(() => {
        this.setData({
          unnormalizedValue2: this.data.unnormalizedValue2.concat([
            {
              id: 8,
              name: '8'
            },
            {
              id: 9,
              pid: 5,
              name: '9'
            },
            {
              id: 10,
              pid: 1,
              name: '10'
            },
          ])
        })
      }, 2000);
    });
  }
});
