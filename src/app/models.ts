// All Nba Teams

export interface Internal {
    pubDateTime: string;
    xslt: string;
    eventName: string;
}

export interface TeamsResponse {
    TeamID: number;
    Key: string;
    Active: boolean;
    City: string;
    Name: string;
    LeagueID: number;
    StadiumID?: number;
    Conference: string;
    Division: string;
    PrimaryColor: string;
    SecondaryColor: string;
    TertiaryColor: string;
    QuaternaryColor: string;
    WikipediaLogoUrl: string;
    WikipediaWordMarkUrl: string;
    GlobalTeamID: number;
    NbaDotComTeamID: number;
}

// Player By Team

export interface PlayerByTeamResponse {
    PlayerID: number;
    SportsDataID: string;
    Status: string;
    TeamID: number;
    Team: string;
    Jersey: number;
    PositionCategory: string;
    Position: string;
    FirstName: string;
    LastName: string;
    Height: number;
    Weight: number;
    BirthDate?: Date;
    BirthCity: string;
    BirthState: string;
    BirthCountry?: any;
    HighSchool?: any;
    College: string;
    Salary?: number;
    PhotoUrl: string;
    Experience: number;
    SportRadarPlayerID: string;
    RotoworldPlayerID?: number;
    RotoWirePlayerID: number;
    FantasyAlarmPlayerID: number;
    StatsPlayerID: number;
    SportsDirectPlayerID: number;
    XmlTeamPlayerID?: number;
    InjuryStatus: string;
    InjuryBodyPart: string;
    InjuryStartDate?: any;
    InjuryNotes: string;
    FanDuelPlayerID: number;
    DraftKingsPlayerID: number;
    YahooPlayerID: number;
    FanDuelName: string;
    DraftKingsName: string;
    YahooName: string;
    DepthChartPosition: string;
    DepthChartOrder?: number;
    GlobalTeamID: number;
    FantasyDraftName: string;
    FantasyDraftPlayerID: number;
    UsaTodayPlayerID: number;
    UsaTodayHeadshotUrl: string;
    UsaTodayHeadshotNoBackgroundUrl: string;
    UsaTodayHeadshotUpdated: Date;
    UsaTodayHeadshotNoBackgroundUpdated: Date;
    NbaDotComPlayerID: number;
}

// Player By Id
export interface PlayerByIdResponse {
    PlayerID: number;
    SportsDataID: string;
    Status: string;
    TeamID: number;
    Team: string;
    Jersey: number;
    PositionCategory: string;
    Position: string;
    FirstName: string;
    LastName: string;
    Height: number;
    Weight: number;
    BirthDate: Date;
    BirthCity: string;
    BirthState: string;
    BirthCountry?: any;
    HighSchool?: any;
    College?: any;
    Salary: number;
    PhotoUrl: string;
    Experience: number;
    SportRadarPlayerID: string;
    RotoworldPlayerID: number;
    RotoWirePlayerID: number;
    FantasyAlarmPlayerID: number;
    StatsPlayerID: number;
    SportsDirectPlayerID: number;
    XmlTeamPlayerID: number;
    InjuryStatus: string;
    InjuryBodyPart: string;
    InjuryStartDate?: any;
    InjuryNotes: string;
    FanDuelPlayerID: number;
    DraftKingsPlayerID: number;
    YahooPlayerID: number;
    FanDuelName: string;
    DraftKingsName: string;
    YahooName: string;
    DepthChartPosition: string;
    DepthChartOrder: number;
    GlobalTeamID: number;
    FantasyDraftName: string;
    FantasyDraftPlayerID: number;
    UsaTodayPlayerID: number;
    UsaTodayHeadshotUrl: string;
    UsaTodayHeadshotNoBackgroundUrl: string;
    UsaTodayHeadshotUpdated: Date;
    UsaTodayHeadshotNoBackgroundUpdated: Date;
    NbaDotComPlayerID: number;
}

// Nba Team Details

export interface TeamDetailResponse {
    id: number;
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    full_name: string;
    name: string;
}

// Nba Players

export interface PlayerResponse {
    PlayerID: number;
    SportsDataID: string;
    Status: string;
    TeamID: number;
    Team: string;
    Jersey: number;
    PositionCategory: string;
    Position: string;
    FirstName: string;
    LastName: string;
    Height: number;
    Weight: number;
    BirthDate: Date;
    BirthCity: string;
    BirthState: string;
    BirthCountry?: any;
    HighSchool?: any;
    College?: any;
    Salary: number;
    PhotoUrl: string;
    Experience: number;
    SportRadarPlayerID: string;
    RotoworldPlayerID: number;
    RotoWirePlayerID: number;
    FantasyAlarmPlayerID: number;
    StatsPlayerID: number;
    SportsDirectPlayerID: number;
    XmlTeamPlayerID: number;
    InjuryStatus: string;
    InjuryBodyPart: string;
    InjuryStartDate?: any;
    InjuryNotes: string;
    FanDuelPlayerID: number;
    DraftKingsPlayerID: number;
    YahooPlayerID: number;
    FanDuelName: string;
    DraftKingsName: string;
    YahooName: string;
    DepthChartPosition: string;
    DepthChartOrder: number;
    GlobalTeamID: number;
    FantasyDraftName: string;
    FantasyDraftPlayerID: number;
    UsaTodayPlayerID: number;
    UsaTodayHeadshotUrl: string;
    UsaTodayHeadshotNoBackgroundUrl: string;
    UsaTodayHeadshotUpdated: Date;
    UsaTodayHeadshotNoBackgroundUpdated: Date;
    NbaDotComPlayerID: number;
}

// Player stats

export interface PlayerStats {
    PlayerID: number;
    SportsDataID: string;
    Status: string;
    TeamID: number;
    Team: string;
    Jersey: number;
    PositionCategory: string;
    Position: string;
    FirstName: string;
    LastName: string;
    Height: number;
    Weight: number;
    BirthDate?: Date;
    BirthCity: string;
    BirthState: string;
    BirthCountry?: any;
    HighSchool?: any;
    College: string;
    Salary?: number;
    PhotoUrl: string;
    Experience: number;
    SportRadarPlayerID: string;
    RotoworldPlayerID?: number;
    RotoWirePlayerID: number;
    FantasyAlarmPlayerID: number;
    StatsPlayerID: number;
    SportsDirectPlayerID: number;
    XmlTeamPlayerID?: number;
    InjuryStatus: string;
    InjuryBodyPart: string;
    InjuryStartDate?: any;
    InjuryNotes: string;
    FanDuelPlayerID: number;
    DraftKingsPlayerID: number;
    YahooPlayerID: number;
    FanDuelName: string;
    DraftKingsName: string;
    YahooName: string;
    DepthChartPosition: string;
    DepthChartOrder?: number;
    GlobalTeamID: number;
    FantasyDraftName: string;
    FantasyDraftPlayerID: number;
    UsaTodayPlayerID: number;
    UsaTodayHeadshotUrl: string;
    UsaTodayHeadshotNoBackgroundUrl: string;
    UsaTodayHeadshotUpdated: Date;
    UsaTodayHeadshotNoBackgroundUpdated: Date;
    NbaDotComPlayerID: number;
}

// Season
export interface Season {
    Season: number;
    StartYear: number;
    EndYear: number;
    Description: string;
    RegularSeasonStartDate: Date;
    PostSeasonStartDate: Date;
    SeasonType: string;
    ApiSeason: string;
}
