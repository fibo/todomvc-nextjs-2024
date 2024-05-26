export const newId = () =>
  "000000".replace(/0/g, () =>
    (Math.floor(Date.now() + Math.random() * 16) % 16).toString(16),
  );

export type Item = {
  id: string;
};
