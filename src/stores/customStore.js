import { defineStore } from 'pinia'
export default defineStore('customStore', {
  state: () => ({
    gemList: [
      {
        gemMonth: '1月',
        gemChName: '石榴石',
        genEnName: 'Garnet',
        gemUrl: '/greensheep-test/src/assets/images/month1.png'
      },
      {
        gemMonth: '2月',
        gemChName: '紫水晶',
        genEnName: 'Amethyst',
        gemUrl: '/greensheep-test/src/assets/images/month2.png'
      },
      {
        gemMonth: '3月',
        gemChName: '海藍寶',
        genEnName: 'Aquamarine',
        gemUrl: '/greensheep-test/src/assets/images/month3.png'
      },
      {
        gemMonth: '4月',
        gemChName: '鑽石',
        genEnName: 'Diamond',
        gemUrl: '/greensheep-test/src/assets/images/month4.png'
      },
      {
        gemMonth: '5月',
        gemChName: '祖母綠',
        genEnName: 'Emerald',
        gemUrl: '/greensheep-test/src/assets/images/month5.png'
      },
      {
        gemMonth: '6月',
        gemChName: '月光石',
        genEnName: 'Moonstone',
        gemUrl: '/greensheep-test/src/assets/images/month6.png'
      },
      {
        gemMonth: '7月',
        gemChName: '紅寶石',
        genEnName: 'Ruby',
        gemUrl: '/greensheep-test/src/assets/images/month7.png'
      },
      {
        gemMonth: '8月',
        gemChName: '橄欖石',
        genEnName: 'Peridot',
        gemUrl: '/greensheep-test/src/assets/images/month8.png'
      },
      {
        gemMonth: '9月',
        gemChName: '藍寶石',
        genEnName: 'Sapphire',
        gemUrl: '/greensheep-test/src/assets/images/month9.png'
      },
      {
        gemMonth: '10月',
        gemChName: '粉碧璽',
        genEnName: 'Tourmaline',
        gemUrl: '/greensheep-test/src/assets/images/month10.png'
      },
      {
        gemMonth: '11月',
        gemChName: '黃水晶',
        genEnName: 'Citrine',
        gemUrl: '/greensheep-test/src/assets/images/month11.png'
      },
      {
        gemMonth: '12月',
        gemChName: '坦桑石',
        genEnName: 'Tanzanite',
        gemUrl: '/greensheep-test/src/assets/images/month12.png'
      }
    ]
  })
})
