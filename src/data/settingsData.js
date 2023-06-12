export const SettingsData = [
  {
    section: "GENERAL STATION",
    options: [
      {
        label: "GENERAL STATION",
        rightText: "Version - 1.0 (103)",
      },
      {
        label: "Connected Network",
        rightText: "<unknown ssid>",
      },

      {
        label: "Enable Auto Printing after Payment",
        switch: true,
        isSwitched: true,
      },
      {
        label: "Enable Cash Management",
        switch: true,
        isSwitched: false,
      },
      {
        label: "Enable Table Management",
        switch: true,
        isSwitched: false,
      },
      {
        label: "Sync BackOffice",
        button: "Sync BackOffice",
      },
      {
        label: "Choose Customer Display",
        button: "Sync BackOffice",
      },
    ],
  },
  {
    section: "LAYOUT GRID",
    options: [
      {
        gridRow: { label: "Pizzeria", description: "Selected Layout" },
        button: "CHANGE LAYOUT",
      },
    ],
  },
  {
    section: "LAYOUT GRID",
    options: [
      {
        gridRowSection: {
          Mainlabel: "RECEIPT PRINTER",

          description: "No Printer Found",
          button: "Discover Printer",
        },
      },
      {
        gridRowSection: {
          Mainlabel: "Kitchen Printer",

          description: "No Printer Found",
          button: "Discover Printer",
        },
      },
      {
        gridRowSection: {
          Mainlabel: "Kitchen First Floor",

          description: "No Printer Found",
          button: "Discover Printer",
        },
      },
      {
        label: "GENERAL STATION",
        switch: true,
        isSwitched: true,
        borderTop: true,
      },
    ],
  },
]
