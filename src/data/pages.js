import componentConfig from './componentConfig'

export default [
  // home route data
  {
    // required to map to the correct route
    path: '/',
    // page title
    title: 'WiCS - Ryerson',
    name: 'home',
    // page cards
    cards: [
      {
        body: {
          title: 'RYERSON WOMEN IN COMPUTER SCIENCE',
          components: [
            {
              tag: componentConfig.blockquote,
              data: {
                text: 'WiCS is a student group run by undergraduate Computer Science students at Ryerson University.'
              }
            }
          ],
          flex: 'md6'
        },
        actions: [
          {
            hint: 'View our facebook page',
            icon: 'fa-facebook',
            href: 'https://www.facebook.com/ryersonwics?fref=ts'
          },
          {
            hint: 'Email us',
            icon: 'fa-envelope',
            href: 'email://wics@ryerson.ca'
          },
          {
            hint: 'Join our mailing list',
            icon: 'fa-sign-in',
            href: ''
          }
        ]
      },
      {
        body: {
          title: 'Who we are',
          components: [
            {
              tag: componentConfig.blockquote,
              data: {
                text: 'Women in Computer Science (WiCS) is run by undergraduate students in the' +
' Computer Science program at Ryerson University. We want to provide a safe space and ' +
'support for groups that are traditionally marginalized in the field of computer science.',
                color: 'white--text'
              }
            }
          ],
          backgroundColor: 'primary',
          color: 'white--text'
        }
      },
      {
        body: {
          backgroundColor: 'white',
          components: [
            {
              tag: componentConfig.card,
              data: {
                flex: 'xs6 sm4 md3',
                media: {
                  src: '/static/images/team/deb.jpg'
                }
              }
            },
            {
              tag: componentConfig.card,
              data: {
                flex: 'xs6 sm4 md3',
                media: {
                  src: '/static/images/team/jojo.jpg'
                }
              }
            },
            {
              tag: componentConfig.card,
              data: {
                flex: 'xs6 sm4 md3',
                backgroundColor: 'rgba(20,20,20, 0.5)',
                media: {
                  src: '/static/images/team/lisa.jpg'
                }
              }
            },
            {
              tag: componentConfig.card,
              data: {
                flex: 'xs6 sm4 md3',
                media: {
                  src: '/static/images/team/carolyn.jpg'
                }
              }
            },
            {
              tag: componentConfig.card,
              data: {
                flex: 'xs6 sm4 md3',
                media: {
                  src: '/static/images/team/mithura.jpg'
                }
              }
            },
            {
              tag: componentConfig.card,
              data: {
                flex: 'xs6 sm4 md3',
                media: {
                  src: '/static/images/team/prabhleen.jpg'
                }
              }
            },
            {
              tag: componentConfig.card,
              data: {
                flex: 'xs6 sm4 md3',
                media: {
                  src: '/static/images/team/santhu.jpg'
                }
              }
            }
          ]
        }
      },
      {
        body: {
          title: 'Our goals',
          components: [
            {
              tag: componentConfig.blockquote,
              data: {
                text: 'Our goal is to encourage current students to continue learning computer science with confidence; ' +
'foster retention of women and marginalized individuals through mentoring. We want to bring students together ' +
'allowing them to network and socialize through events and provide opportunities for students to network with ' +
'women professionals in the industry. Recruiting is also a priority to get prospective students interested in going ' +
'to the STEM field.',
                color: 'white--text'
              }
            }
          ],
          backgroundColor: 'secondary',
          color: 'white--text',
          flex: 'md6'
        }
      },
      {
        body: {
          title: 'Upcoming Events for Fall 2017',
          flex: 'md6',
          components: [
            {
              tag: componentConfig.list,
              data: [
                {
                  active: false,
                  expand: true,
                  title: 'Meet and Greet',
                  time: 'Mid September',
                  color: '#7d7abc',
                  description: 'Meet and Greet is an opportunity to meet and get to know the WiCS team, and our ' +
                  'plans for the school year. Also a chance to network and get to know their fellow Computer Science students.'
                },
                {
                  active: false,
                  expand: true,
                  title: 'Cookie and Cram Night',
                  time: 'Late September',
                  color: '#7d7abc',
                  description: 'Cookies and Cram Night is an event that gives students the opportunity to connect with ' +
                  'one another while preparing for exams.  There will be students of different years which gives all ' +
                  'participants a chance to get assistance on any concepts they need clarification on and assignments ' +
                  'they need help with. This event allows the students to get to know one another and encourage each ' +
                  'other through the Computer Science program.'
                },
                {
                  active: false,
                  expand: true,
                  title: 'Technical Mock Interview',
                  time: 'Last week of October to First week of November',
                  color: '#7d7abc',
                  description: 'In the Technology field, having strong technical skills is as essential as being able ' +
                  'to apply them in the workplace. Technical interviews allow students to apply their knowledge and show ' +
                  'their skills although not all students are fully prepared for the questions that will be asked. ' +
                  'Technical Mock Interviews aims to provide students with the opportunity to experience a technical ' +
                  'interview and get extra practice so that they can be their best when the real interview comes along. ' +
                  'Students will be asked technical questions based on programming languages they are experienced in and ' +
                  'given feedback on areas of improvement. We want to improve student’s interview skills so that they will ' +
                  'feel motivated and excel in job interviews.'
                }
              ]
            },
            {
              tag: componentConfig.alert,
              data: {
                type: 'info',
                alert: 'Dates for the events will be finalized as they approach'
              }
            }
          ]
        }
      }
    ]
  },
  // contacts route data
  {
    path: '/contacts',
    title: '',
    name: 'contacts',
    cards: []
  }
]

