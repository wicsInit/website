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
        backgroundColor: 'xmasGr',
        color: 'white--text'
      }
    },
    {
      paddingContainer: '0px',
      flat: true,
      body: {
        backgroundColor: 'xmasR',
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
                src: '/static/images/team/2017/Prabhleen.jpg',
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
                src: '/static/images/team/2017/deborah.jpg',
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
                src: '/static/images/team/2017/rojin.jpg',
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
                src: '/static/images/team/2017/hema.jpg',
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
                src: '/static/images/team/2017/lisa.jpg',
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
                src: '/static/images/team/2017/paurali.jpg',
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
                src: '/static/images/team/2017/bhoomi.jpg',
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
        backgroundColor: 'xmasGr',
        color: 'white--text',
        flex: 'md6'
      }
    },
    {
      body: {
        title: 'Upcoming Events for Fall 2017',
        flex: 'md6',
        backgroundColor: 'xmasG',
        color: 'xmasR2--text',
        components: [
          {
            tag: componentConfig.list,
            data: [
              {
                active: false,
                expand: true,
                title: 'Holiday Party',
                time: 'November 15 2017 6:00pm',
                location: 'TBA',
                color: '#3c688b',
                description: 'TBA'
              },
              {
                active: false,
                expand: true,
                title: 'Technical Mock Interview',
                time: 'Beginning of January',
                location: 'TBA',
                description: 'Giving students Technical Interviews to be able to prepare them for interviews that can be taken place outside of university in a professional work environment.'
              },
              {
                active: false,
                expand: true,
                title: 'Women in STEM',
                time: 'January 24 2017',
                location: 'TBA',
                color: '#3c688b',
                description: 'A collaboration event between Faculty of science equity groups, Women in Computer Science, and Women in Mathematics, to create mentorship to students within respective programs to help guide them to their field of interest.'
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
