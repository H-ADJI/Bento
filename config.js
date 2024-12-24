// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: "Khalil !",
  imageBackground: true,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: "Good morning ",
  greetingAfternoon: "Good afternoon ",
  greetingEvening: "Good evening ",
  greetingNight: "Go to Sleep ",

  // Layout
  bentoLayout: "buttons", // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: "19d735af9adcfd24068aa3accfebab11", // Write here your API Key
  weatherIcons: "Nord", // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: "C", // 'F', 'C'
  language: "en", // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: "49.042389",
  defaultLongitude: "2.064830",

  // Autochange
  autoChangeTheme: true,

  // Autochange by OS
  changeThemeByOS: false,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: "18:30",
  hourDarkThemeInactive: "07:00",

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: "3",
      name: "Mail",
      icon: "mail",
      link: "https://mail.protonmail.com/",
    },
    {
      id: "4",
      name: "TaskBoard",
      icon: "trello",
      link: "https://tasksboard.com/app",
    },
    {
      id: "6",
      name: "Calendar",
      icon: "calendar",
      link: "https://calendar.google.com/calendar/r",
    },
  ],

  secondButtonsContainer: [
    {
      id: "3",
      name: "Music",
      icon: "headphones",
      link: "https://open.spotify.com",
    },
    {
      id: "4",
      name: "Github",
      icon: "github",
      link: "https://github.com/H-ADJI",
    },
    {
      id: "6",
      name: "Hashnode",
      icon: "pen-tool",
      link: "https://excalidraw.com/",
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  // First Links Container
  firstlistsContainer: [
    {
      icon: "music",
      id: "1",
      links: [
        {
          name: "Inspirational",
          link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
          name: "Classic",
          link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
          name: "Oldies",
          link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
          name: "Rock",
          link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
      ],
    },
    {
      icon: "coffee",
      id: "2",
      links: [
        {
          name: "Linkedin",
          link: "https://www.linkedin.com",
        },
        {
          name: "Dribbble",
          link: "https://www.dribbble.com",
        },
        {
          name: "Trello",
          link: "https://www.trello.com",
        },
        {
          name: "Slack",
          link: "https://www.slack.com",
        },
      ],
    },
  ],

  // Second Links Container
  secondListsContainer: [
    {
      icon: "binary",
      id: "1",
      links: [
        {
          name: "Spotify",
          link: "https://www.spotify.com",
        },
        {
          name: "Reddit",
          link: "https://www.reddit.com",
        },
        {
          name: "Hashnode",
          link: "https://www.hashnode.com",
        },
        {
          name: "Pocket",
          link: "https://www.pocket.com",
        },
      ],
    },
    {
      icon: "github",
      id: "2",
      links: [
        {
          name: "Front",
          link: "https://www.reddit.com/r/Frontend/",
        },
        {
          name: "Rust",
          link: "https://www.reddit.com/r/rust/",
        },
        {
          name: "Go",
          link: "https://www.reddit.com/r/golang/",
        },
        {
          name: "Repos",
          link: "https://github.com/migueravila",
        },
      ],
    },
  ],
};
