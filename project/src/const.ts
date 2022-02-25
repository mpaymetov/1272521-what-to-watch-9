export enum AppRoute {
  Root = '/',
  Login = '/login',
  MyList = '/mylist',
  Films = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

export enum LogoPosition {
  Header = 'Header',
  Footer = 'footer',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
