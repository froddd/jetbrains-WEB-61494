export const Status = {
    PENDING: "PENDING"
};

export type Status = (typeof Status)[keyof typeof Status]
