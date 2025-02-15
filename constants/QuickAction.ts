export const QUICK_ACTIONS = [
    {
      icon: "add-circle-outline" as const,
      label: "Add\nMedication",
      route: "/medications/add" as const,
      color: "#2E7D32",
      gradient: ["#305cde", "#274ab3"] as [string, string],
    },
    {
      icon: "calendar-outline" as const,
      label: "Calendar\nView",
      route: "/calendar" as const,
      color: "#1976D2",
      gradient: ["#D09511", "#EFBD4F"] as [string, string],
    },
    {
      icon: "time-outline" as const,
      label: "History\nLog",
      route: "/history" as const,
      color: "#C2185B",
      gradient: ["#0BA1B5", "#1BBED4"] as [string, string],
    },
    {
      icon: "medical-outline" as const,
      label: "Refill\nTracker",
      route: "/refills" as const,
      color: "#E64A19",
      gradient: ["#D45B1B", "#E05530"] as [string, string],
    },
  ];