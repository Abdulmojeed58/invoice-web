const path = (root: string, subLink: string) => `${root}${subLink}`;

const ROOTS = "/";
const ROOTS_AUTH = "/auth";
const ROOTS_DASHBOARD = "/dashboard";
const ROOTS_PROFILE = "/profile";
const ROOTS_CUSTOMERS = "/customers";
const ROOTS_SETTINGS = "/settings";

export const PATHS = {
  root: ROOTS,

  auth: {
    root: ROOTS_AUTH,
    login: path(ROOTS_AUTH, "/login"),
    register: path(ROOTS_AUTH, "/register"),
    forgotPassword: path(ROOTS_AUTH, "/forgot_password"),
  },
  dashboard: {
    root: ROOTS_DASHBOARD,
  },
  profile: {
    root: ROOTS_PROFILE,
  },
  customers: {
    root: ROOTS_CUSTOMERS,
    create: path(ROOTS_CUSTOMERS, "/create"),
    edit: (id: string) => path(ROOTS_CUSTOMERS, `/edit/${id}`),
    view: (id: string) => path(ROOTS_CUSTOMERS, `/${id}`),
  },
  settings: {
    root: ROOTS_SETTINGS,
  },
};
