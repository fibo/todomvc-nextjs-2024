const filters = ["all", "completed", "active"] as const;

export type Filter = (typeof filters)[number];
