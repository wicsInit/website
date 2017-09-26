import componentConfig from '../componentConfig'
import socialMedia from '../socialMedia'

export default {
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
      actions: socialMedia
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
      paddingContainer: '0px',
      flat: true,
      body: {
        backgroundColor: 'secondary',
        components: [
          {
            tag: componentConfig.card,
            data: {
              flex: 'xs12 sm6 md4 lg3',
              media: {
                content: {
                  title: 'Prabhleen Kamboj',
                  p: 'Co-President'
                },
                src: '/static/images/team/Prabhleen.jpg',
                model: false,
                hoverOver () {
                  this.model = true
                },
                hoverOut () {
                  this.model = false
                }
              }
            }
          },
          {
            tag: componentConfig.card,
            data: {
              flex: 'xs12 sm6 md4 lg3',
              backgroundColor: 'rgba(20,20,20, 0.5)',
              media: {
                content: {
                  title: 'Deborah Mepaiyeda',
                  p: 'Co-President'
                },
                src: '/static/images/team/deb.jpg',
                model: false,
                hoverOver () {
                  this.model = true
                },
                hoverOut () {
                  this.model = false
                }
              }
            }
          },
          {
            tag: componentConfig.card,
            data: {
              flex: 'xs12 sm6 md4 lg3',
              media: {
                content: {
                  title: 'Rojin Shahba',
                  p: 'VP of Communications & Corporate Relations'
                },
                src: '/static/images/team/Rojin.jpg',
                model: false,
                hoverOver () {
                  this.model = true
                },
                hoverOut () {
                  this.model = false
                }
              }
            }
          },
          {
            tag: componentConfig.card,
            data: {
              flex: 'xs12 sm6 md4 lg3',
              media: {
                content: {
                  title: 'Hema Chudasama',
                  p: 'VP Marketing'
                },
                src: '/static/images/team/Hema.jpg',
                model: false,
                hoverOver () {
                  this.model = true
                },
                hoverOut () {
                  this.model = false
                }
              }
            }
          },
          {
            tag: componentConfig.card,
            data: {
              flex: 'xs12 sm6 md4 lg3',
              media: {
                content: {
                  title: 'Lisa Wong',
                  p: 'VP Academics'
                },
                src: '/static/images/team/Lisa.jpg',
                model: false,
                hoverOver () {
                  this.model = true
                },
                hoverOut () {
                  this.model = false
                }
              }
            }
          },
          {
            tag: componentConfig.card,
            data: {
              flex: 'xs12 sm6 md4 lg3',
              media: {
                content: {
                  title: 'Paurali Rahevar',
                  p: 'Vice-President Operations and Events'
                },
                src: '/static/images/team/Paurali.jpg',
                model: false,
                hoverOver () {
                  this.model = true
                },
                hoverOut () {
                  this.model = false
                }
              }
            }
          },
          {
            tag: componentConfig.card,
            data: {
              flex: 'xs12 sm6 md4 lg3',
              media: {
                content: {
                  title: 'Bhoomi Patel',
                  p: 'Vice-President Operations and Events'
                },
                src: '/static/images/team/DSC_0643.jpg',
                model: false,
                hoverOver () {
                  this.model = true
                },
                hoverOut () {
                  this.model = false
                }
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
        backgroundColor: 'primary',
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
                title: 'Meet N Greet',
                time: 'October 4 6:00pm - 9:00pm',
                location: 'SDZ',
                color: '#3c688b',
                description: 'Meet and Greet is an opportunity to meet and get to know the WiCS team, and our ' +
                'plans for the school year. Also a chance to network and get to know their fellow Computer Science students.'
              },
              {
                active: false,
                expand: true,
                title: 'Cookie and Cram Night',
                time: 'Late September',
                location: 'TBA',
                color: '#3c688b',
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
                location: 'TBA',
                color: '#3c688b',
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
}
