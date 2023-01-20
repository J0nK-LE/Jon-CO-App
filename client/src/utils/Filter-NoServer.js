//  ONLY THE FILTER WORKS HERE
import React,  {
  useCallback,
  useEffect,
  useState,
} from "react"

const COUNTRIES = [
  "UNITED STATES (USA)",
  "CANADA",
  "UNITED KINGDOM (UK)",
  "MEXICO",
  "CHINA",
  "JAPAN",
  "SPAIN",
  "HONG KONG",
  "BELGIUM"
]
const allData = [
  {
    Country: null,
    CreatedOn: "2015-03-26",
    DateAvailableToPublic: "2015-01-01",
    Id: 987,
    Name: "HONDA MOTOR CO., LTD",
    UpdatedOn: "2015-06-04",
    VehicleType: "Passenger Car",
    WMI: "JHM",
  },
  {
    Country: "UNITED STATES (USA)",
    CreatedOn: "2015-03-26",
    DateAvailableToPublic: "2015-01-01",
    Id: 988,
    Name: "HONDA OF AMERICA MFG., INC.",
    UpdatedOn: null,
    VehicleType: "Passenger Car",
    WMI: "1HG",
  },
  {
    Country: "UNITED STATES (USA)",
    CreatedOn: "2015-03-26",
    DateAvailableToPublic: "2015-01-01",
    Id: 989,
    Name: "HONDA MFG., ALABAMA., LLC.",
    UpdatedOn: null,
    VehicleType: "Passenger Car",
    WMI: "5KB",
  },
  {
    Country: "CANADA",
    CreatedOn: "2015-03-26",
    DateAvailableToPublic: "2015-01-01",
    Id: 990,
    Name: "HONDA OF CANADA MFG., INC.",
    UpdatedOn: null,
    VehicleType: "Passenger Car",
    WMI: "2HG",
  },
  {
    Country: "UNITED KINGDOM (UK)",
    CreatedOn: "2015-03-26",
    DateAvailableToPublic: "2015-01-01",
    Id: 991,
    Name: "HONDA OF THE U.K. MFG., LTD.",
    UpdatedOn: null,
    VehicleType: "Passenger Car",
    WMI: "SHH",
  },
  {
    Country: "MEXICO",
    CreatedOn: "2015-03-26",
    DateAvailableToPublic: "2015-01-01",
    Id: 992,
    Name: "HONDA DE MEXICO",
    UpdatedOn: null,
    VehicleType: "Passenger Car",
    WMI: "3HG",
  },
  {
    Country: null,
    CreatedOn: "2015-03-26",
    DateAvailableToPublic: "2015-01-01",
    Id: 993,
    Name: "HONDA MFG., INDIANA., LLC.",
    UpdatedOn: null,
    VehicleType: "Passenger Car",
    WMI: "19X",
  },
  {
    Country: null,
    CreatedOn: "2015-03-27",
    DateAvailableToPublic: "2015-01-01",
    Id: 987,
    Name: "HONDA MOTOR CO., LTD",
    UpdatedOn: null,
    VehicleType: "Passenger Car",
    WMI: "JH4",
  },
  {
    Country: null,
    CreatedOn: "2015-03-27",
    DateAvailableToPublic: "2015-01-01",
    Id: 987,
    Name: "HONDA MOTOR CO., LTD",
    UpdatedOn: null,
    VehicleType: "Multipurpose Passenger Vehicle (MPV)",
    WMI: "JHL",
  },
  {
    Country: null,
    CreatedOn: "2015-03-27",
    DateAvailableToPublic: "2015-01-01",
    Id: 987,
    Name: "HONDA MOTOR CO., LTD",
    UpdatedOn: null,
    VehicleType: "Truck ",
    WMI: "JH1",
  },
  {
    Country: "UNITED STATES (USA)",
    CreatedOn: "2015-03-27",
    DateAvailableToPublic: "2015-01-01",
    Id: 988,
    Name: "HONDA OF AMERICA MFG., INC.",
    UpdatedOn: "2015-03-27",
    VehicleType: "Passenger Car",
    WMI: "19U",
  },
  {
    Country: "UNITED STATES (USA)",
    CreatedOn: "2015-03-27",
    DateAvailableToPublic: "2015-01-01",
    Id: 988,
    Name: "HONDA OF AMERICA MFG., INC.",
    UpdatedOn: null,
    VehicleType: "Multipurpose Passenger Vehicle (MPV)",
    WMI: "5J6",
  },
  {
    Country: "UNITED STATES (USA)",
    CreatedOn: "2015-03-27",
    DateAvailableToPublic: "2015-01-01",
    Id: 988,
    Name: "HONDA OF AMERICA MFG., INC.",
    UpdatedOn: "2015-03-27",
    VehicleType: "Multipurpose Passenger Vehicle (MPV)",
    WMI: "5J8",
  },
  {
    Country: "UNITED STATES (USA)",
    CreatedOn: "2015-03-27",
    DateAvailableToPublic: "2015-01-01",
    Id: 988,
    Name: "HONDA OF AMERICA MFG., INC.",
    UpdatedOn: null,
    VehicleType: "Truck ",
    WMI: "5J7",
  },
  {
    Country: "UNITED STATES (USA)",
    CreatedOn: "2015-03-27",
    DateAvailableToPublic: "2015-01-01",
    Id: 988,
    Name: "HONDA OF AMERICA MFG., INC.",
    UpdatedOn: null,
    VehicleType: "Truck ",
    WMI: "5J0",
  },
  {
    Country: "UNITED STATES (USA)",
    CreatedOn: "2015-03-27",
    DateAvailableToPublic: "2015-01-01",
    Id: 989,
    Name: "HONDA MFG., ALABAMA., LLC.",
    UpdatedOn: null,
    VehicleType: "Passenger Car",
    WMI: "5KC",
  },
  {
    Country: "UNITED STATES (USA)",
    CreatedOn: "2015-03-27",
    DateAvailableToPublic: "2015-01-01",
    Id: 989,
    Name: "HONDA MFG., ALABAMA., LLC.",
    UpdatedOn: null,
    VehicleType: "Multipurpose Passenger Vehicle (MPV)",
    WMI: "5FN",
  },
  {
    Country: "UNITED STATES (USA)",
    CreatedOn: "2015-03-27",
    DateAvailableToPublic: "2015-01-01",
    Id: 989,
    Name: "HONDA MFG., ALABAMA., LLC.",
    UpdatedOn: null,
    VehicleType: "Multipurpose Passenger Vehicle (MPV)",
    WMI: "5FR",
  },
  {
    Country: "UNITED STATES (USA)",
    CreatedOn: "2015-03-27",
    DateAvailableToPublic: "2015-01-01",
    Id: 989,
    Name: "HONDA MFG., ALABAMA., LLC.",
    UpdatedOn: null,
    VehicleType: "Truck ",
    WMI: "5FP",
  },
  {
    Country: "UNITED STATES (USA)",
    CreatedOn: "2015-03-27",
    DateAvailableToPublic: "2015-01-01",
    Id: 989,
    Name: "HONDA MFG., ALABAMA., LLC.",
    UpdatedOn: null,
    VehicleType: "Truck ",
    WMI: "5FS",
  },
  {
    Country: "CANADA",
    CreatedOn: "2015-03-27",
    DateAvailableToPublic: "2015-01-01",
    Id: 990,
    Name: "HONDA OF CANADA MFG., INC.",
    UpdatedOn: "2015-03-27",
    VehicleType: "Passenger Car",
    WMI: "2HH",
  },
  {
    Country: "CANADA",
    CreatedOn: "2015-03-27",
    DateAvailableToPublic: "2015-01-01",
    Id: 990,
    Name: "HONDA OF CANADA MFG., INC.",
    UpdatedOn: null,
    VehicleType: "Multipurpose Passenger Vehicle (MPV)",
    WMI: "2HK",
  },
  {
    Country: "CANADA",
    CreatedOn: "2015-03-27",
    DateAvailableToPublic: "2015-01-01",
    Id: 990,
    Name: "HONDA OF CANADA MFG., INC.",
    UpdatedOn: null,
    VehicleType: "Multipurpose Passenger Vehicle (MPV)",
    WMI: "2HN",
  },
  {
    Country: "CANADA",
    CreatedOn: "2015-03-27",
    DateAvailableToPublic: "2015-01-01",
    Id: 990,
    Name: "HONDA OF CANADA MFG., INC.",
    UpdatedOn: null,
    VehicleType: "Truck ",
    WMI: "2HJ",
  },
  {
    Country: "CANADA",
    CreatedOn: "2015-03-27",
    DateAvailableToPublic: "2015-01-01",
    Id: 990,
    Name: "HONDA OF CANADA MFG., INC.",
    UpdatedOn: null,
    VehicleType: "Truck ",
    WMI: "2HU",
  },
  {
    Country: "UNITED KINGDOM (UK)",
    CreatedOn: "2015-03-27",
    DateAvailableToPublic: "2015-01-01",
    Id: 991,
    Name: "HONDA OF THE U.K. MFG., LTD.",
    UpdatedOn: null,
    VehicleType: "Multipurpose Passenger Vehicle (MPV)",
    WMI: "SHS",
  },
  {
    Country: "MEXICO",
    CreatedOn: "2015-03-27",
    DateAvailableToPublic: "2015-01-01",
    Id: 992,
    Name: "HONDA DE MEXICO",
    UpdatedOn: null,
    VehicleType: "Multipurpose Passenger Vehicle (MPV)",
    WMI: "3CZ",
  },
  {
    Country: null,
    CreatedOn: "2015-04-03",
    DateAvailableToPublic: "2015-01-01",
    Id: 1154,
    Name: "AMERICAN HONDA MOTOR CO., INC.",
    UpdatedOn: "2015-06-04",
    VehicleType: "Motorcycle",
    WMI: "JH2",
  },
  {
    Country: null,
    CreatedOn: "2015-04-03",
    DateAvailableToPublic: "2015-01-01",
    Id: 1154,
    Name: "AMERICAN HONDA MOTOR CO., INC.",
    UpdatedOn: "2015-06-04",
    VehicleType: "Motorcycle",
    WMI: "1HF",
  },
  {
    Country: "BELGIUM",
    CreatedOn: "2015-04-03",
    DateAvailableToPublic: "2015-01-01",
    Id: 988,
    Name: "HONDA OF AMERICA MFG., INC.",
    UpdatedOn: "2016-07-08",
    VehicleType: "Motorcycle",
    WMI: "YC1",
  },
  {
    Country: null,
    CreatedOn: "2015-04-03",
    DateAvailableToPublic: "2015-01-01",
    Id: 1154,
    Name: "AMERICAN HONDA MOTOR CO., INC.",
    UpdatedOn: "2015-06-04",
    VehicleType: "Motorcycle",
    WMI: "3H1",
  },
  {
    Country: "UNITED STATES (USA)",
    CreatedOn: "2015-04-21",
    DateAvailableToPublic: "2015-01-01",
    Id: 993,
    Name: "HONDA MFG., INDIANA., LLC.",
    UpdatedOn: null,
    VehicleType: "Passenger Car",
    WMI: "19V",
  },
  {
    Country: null,
    CreatedOn: "2015-06-04",
    DateAvailableToPublic: "2015-01-01",
    Id: 1154,
    Name: "AMERICAN HONDA MOTOR CO., INC.",
    UpdatedOn: "2016-06-17",
    VehicleType: "Motorcycle",
    WMI: "ZDC",
  },
  {
    Country: null,
    CreatedOn: "2015-06-04",
    DateAvailableToPublic: "2015-01-01",
    Id: 1154,
    Name: "AMERICAN HONDA MOTOR CO., INC.",
    UpdatedOn: null,
    VehicleType: "Motorcycle",
    WMI: "MLH",
  },
  {
    Country: "CHINA",
    CreatedOn: "2015-06-04",
    DateAvailableToPublic: "2015-01-01",
    Id: 14790,
    Name: "SUNDIRO HONDA MOTORCYCLE CO., LTD.",
    UpdatedOn: "2017-08-01",
    VehicleType: "Motorcycle",
    WMI: "LAL",
  },
  {
    Country: null,
    CreatedOn: "2015-06-04",
    DateAvailableToPublic: "2015-01-01",
    Id: 1154,
    Name: "AMERICAN HONDA MOTOR CO., INC.",
    UpdatedOn: null,
    VehicleType: "Motorcycle",
    WMI: "RLH",
  },
  {
    Country: null,
    CreatedOn: "2015-06-04",
    DateAvailableToPublic: "2015-01-01",
    Id: 1154,
    Name: "AMERICAN HONDA MOTOR CO., INC.",
    UpdatedOn: null,
    VehicleType: "Motorcycle",
    WMI: "VTM",
  },
  {
    Country: null,
    CreatedOn: "2015-06-04",
    DateAvailableToPublic: "2015-01-01",
    Id: 1154,
    Name: "AMERICAN HONDA MOTOR CO., INC.",
    UpdatedOn: null,
    VehicleType: "Motorcycle",
    WMI: "LWB",
  },
  {
    Country: "CHINA",
    CreatedOn: "2015-07-07",
    DateAvailableToPublic: "2015-01-01",
    Id: 12142,
    Name: "CHONGQING GUANGYU MOTORCYCLE MANUFACTURE CO., LTD.",
    UpdatedOn: "2019-11-06",
    VehicleType: "Motorcycle",
    WMI: "LRY",
  },
  {
    Country: "CHINA",
    CreatedOn: "2015-07-07",
    DateAvailableToPublic: "2015-01-01",
    Id: 11163,
    Name: "CHONGQING HI-BIRD MOTORCYCLE INDUSTRY CO., LTD.",
    UpdatedOn: null,
    VehicleType: "Motorcycle",
    WMI: "LSR",
  },
  {
    Country: "CHINA",
    CreatedOn: "2015-07-07",
    DateAvailableToPublic: "2015-01-01",
    Id: 12294,
    Name: "CHONGQING KAIER MOTORCYCLE MANUFACTURING CO.,",
    UpdatedOn: null,
    VehicleType: "Motorcycle",
    WMI: "LYE",
  },
  {
    Country: "CHINA",
    CreatedOn: "2015-07-07",
    DateAvailableToPublic: "2015-01-01",
    Id: 10479,
    Name: "CHONGQING KINLON MOTORCYCLE MANUFACTURE CO., LTD",
    UpdatedOn: "2015-07-22",
    VehicleType: "Motorcycle",
    WMI: "LLC",
  },
  {
    Country: "CHINA",
    CreatedOn: "2015-07-07",
    DateAvailableToPublic: "2015-01-01",
    Id: 11366,
    Name: "CHONGQING HUANSONG INDUSTRIES (GROUP) CO., LTD.",
    UpdatedOn: null,
    VehicleType: "Motorcycle",
    WMI: "LWG",
  },
  {
    Country: "CHINA",
    CreatedOn: "2015-07-07",
    DateAvailableToPublic: "2015-01-01",
    Id: 1471,
    Name: "CHONGQING RATO POWER CO., LTD.",
    UpdatedOn: null,
    VehicleType: "Motorcycle",
    WMI: "LRP",
  },
  {
    Country: "CHINA",
    CreatedOn: "2015-07-07",
    DateAvailableToPublic: "2015-01-01",
    Id: 6877,
    Name: "CHONGQING YINXIANG MOTORCYCLE (GROUP) CO., LTD.",
    UpdatedOn: "2015-09-15",
    VehicleType: "Motorcycle",
    WMI: "LB4",
  },
  {
    Country: "UNITED STATES (USA)",
    CreatedOn: "2015-07-15",
    DateAvailableToPublic: "2015-01-01",
    Id: 1154,
    Name: "AMERICAN HONDA MOTOR CO., INC.",
    UpdatedOn: null,
    VehicleType: "Multipurpose Passenger Vehicle (MPV)",
    WMI: "JR2",
  },
  {
    Country: "CHINA",
    CreatedOn: "2015-07-16",
    DateAvailableToPublic: "2015-01-01",
    Id: 10754,
    Name: "WUXI JINHONG MOTORCYCLE CO., LTD",
    UpdatedOn: "2017-08-22",
    VehicleType: "Motorcycle",
    WMI: "LC3",
  },
  {
    Country: "UNITED STATES (USA)",
    CreatedOn: "2015-07-20",
    DateAvailableToPublic: "2015-01-01",
    Id: 6460,
    Name: "JOYHON, INC.",
    UpdatedOn: null,
    VehicleType: "Trailer",
    WMI: "1J9390",
  },
  {
    Country: "CHINA",
    CreatedOn: "2015-07-20",
    DateAvailableToPublic: "2015-01-01",
    Id: 6108,
    Name: "CHANGZHOU ZHONGMAO MACHINERY CO., LTD",
    UpdatedOn: null,
    VehicleType: "Trailer",
    WMI: "L0H",
  },
  {
    Country: "CHINA",
    CreatedOn: "2015-07-21",
    DateAvailableToPublic: "2015-01-01",
    Id: 12293,
    Name: "CHONGQING ASTRONAUTIC BASHAN MOTORCYCLE MANUFACTURING CO., LTD.",
    UpdatedOn: null,
    VehicleType: "Motorcycle",
    WMI: "LHJ",
  },
  {
    Country: "UNITED STATES (USA)",
    CreatedOn: "2015-07-23",
    DateAvailableToPublic: "2015-01-01",
    Id: 11400,
    Name: "MARATHON METALWORKS",
    UpdatedOn: null,
    VehicleType: "Trailer",
    WMI: "1M9822",
  },
  {
    Country: "CHINA",
    CreatedOn: "2015-07-27",
    DateAvailableToPublic: "2015-07-27",
    Id: 11152,
    Name: "CHONGQING HENSIM GROUP CO., LTD.",
    UpdatedOn: null,
    VehicleType: "Motorcycle",
    WMI: "LUA",
  },
  {
    Country: "CHINA",
    CreatedOn: "2015-08-05",
    DateAvailableToPublic: "2015-08-05",
    Id: 13493,
    Name: "JIANGMEN SINO-HONGKONG BAOTIAN MOTORCYCLE INDUSTRIAL CO., LTD.",
    UpdatedOn: null,
    VehicleType: "Motorcycle",
    WMI: "L82",
  },
  {
    Country: "UNITED STATES (USA)",
    CreatedOn: "2015-08-07",
    DateAvailableToPublic: "2015-08-07",
    Id: 7575,
    Name: "SHANDONG ZHONGTONG FEIYAN AUTOMOBILE CO. LTD.",
    UpdatedOn: null,
    VehicleType: "Motorcycle",
    WMI: "L69FYK",
  },
  {
    Country: "CHINA",
    CreatedOn: "2015-08-10",
    DateAvailableToPublic: "2015-08-10",
    Id: 9274,
    Name: "TAIZHOU ZHONGNENG MOTORCYCLE CO., LTD.",
    UpdatedOn: null,
    VehicleType: "Motorcycle",
    WMI: "L5Y",
  },
  {
    Country: "CHINA",
    CreatedOn: "2015-08-11",
    DateAvailableToPublic: "2015-08-11",
    Id: 1327,
    Name: "SHANGHAI HUIZHONG AUTOMOTIVE MANUFACTURING CO., LTD",
    UpdatedOn: null,
    VehicleType: "Trailer",
    WMI: "LSB",
  },
  {
    Country: "CHINA",
    CreatedOn: "2015-08-11",
    DateAvailableToPublic: "2015-08-11",
    Id: 8915,
    Name: "SHANGHAI HONLING MOTORCYCLE MANUFACTURE CO., LTD.",
    UpdatedOn: null,
    VehicleType: "Motorcycle",
    WMI: "LLA",
  },
  {
    Country: "CHINA",
    CreatedOn: "2015-08-31",
    DateAvailableToPublic: "2015-08-31",
    Id: 18814,
    Name: "CHONGQING ANDES MOTORCYCLE MANUFACTURING CO.,LTD.",
    UpdatedOn: "2020-05-01",
    VehicleType: "Motorcycle",
    WMI: "LKX",
  },
  {
    Country: "CHINA",
    CreatedOn: "2015-09-03",
    DateAvailableToPublic: "2015-09-03",
    Id: 10038,
    Name: "CHONGQING SHUANGQING MECHANICAL & ELECTRICAL CO.",
    UpdatedOn: "2016-06-24",
    VehicleType: "Motorcycle",
    WMI: "LZX",
  },
  {
    Country: "CHINA",
    CreatedOn: "2015-09-04",
    DateAvailableToPublic: "2015-09-04",
    Id: 9554,
    Name: "CHONGQUING DAJIANG MOTORCYCLES CO., LTD",
    UpdatedOn: "2019-11-07",
    VehicleType: "Motorcycle",
    WMI: "L1P",
  },
  {
    Country: "UNITED STATES (USA)",
    CreatedOn: "2015-09-16",
    DateAvailableToPublic: "2015-09-16",
    Id: 1695,
    Name: "MARATHON HOMES CORPORATION",
    UpdatedOn: null,
    VehicleType: "Trailer",
    WMI: "1M9019",
  },
  {
    Country: "CHINA",
    CreatedOn: "2015-11-06",
    DateAvailableToPublic: "2015-11-06",
    Id: 7363,
    Name: "Xinri E-Vehicle Hongkong Co., Limited",
    UpdatedOn: null,
    VehicleType: "Motorcycle",
    WMI: "R12",
  },
  {
    Country: "CHINA",
    CreatedOn: "2015-12-17",
    DateAvailableToPublic: "2015-12-17",
    Id: 14236,
    Name: "CHONGQING SHINERAY MOTORCYCLE CO., LTD.",
    UpdatedOn: "2018-08-06",
    VehicleType: "Motorcycle",
    WMI: "LXY",
  },
  {
    Country: null,
    CreatedOn: "2015-12-30",
    DateAvailableToPublic: "1988-12-30",
    Id: 1154,
    Name: "AMERICAN HONDA MOTOR CO., INC.",
    UpdatedOn: null,
    VehicleType: "Motorcycle",
    WMI: "9C2",
  },
  {
    Country: "JAPAN",
    CreatedOn: "2016-06-08",
    DateAvailableToPublic: "2016-06-08",
    Id: 987,
    Name: "HONDA MOTOR CO., LTD",
    UpdatedOn: null,
    VehicleType: "Motorcycle",
    WMI: "JH3",
  },
  {
    Country: "UNITED STATES (USA)",
    CreatedOn: "2016-06-08",
    DateAvailableToPublic: "2016-06-08",
    Id: 993,
    Name: "HONDA MFG., INDIANA., LLC.",
    UpdatedOn: null,
    VehicleType: "Motorcycle",
    WMI: "478",
  },
  {
    Country: "SPAIN",
    CreatedOn: "2016-06-17",
    DateAvailableToPublic: "2016-06-17",
    Id: 15171,
    Name: "MONTESA HONDA SA",
    UpdatedOn: null,
    VehicleType: "Motorcycle",
    WMI: "VTD",
  },
  {
    Country: "CHINA",
    CreatedOn: "2016-08-31",
    DateAvailableToPublic: "2016-08-31",
    Id: 15538,
    Name: "CHONGQING YINGANG SCIENCE & TECHNOLOGY (GROUP) CO., LTD.",
    UpdatedOn: "2016-09-01",
    VehicleType: "Motorcycle",
    WMI: "LY4",
  },
  {
    Country: "HONG KONG",
    CreatedOn: "2016-10-26",
    DateAvailableToPublic: "2016-10-26",
    Id: 15739,
    Name: "RONGCHENG COMPAKS (HONG KONG) NEW ENERGY AUTOMOBILE CO LTD",
    UpdatedOn: null,
    VehicleType: "Trailer",
    WMI: "R1V",
  },
  {
    Country: "CANADA",
    CreatedOn: "2017-02-22",
    DateAvailableToPublic: "2017-02-22",
    Id: 15238,
    Name: "MARATHON EQUIPMENT LTD ",
    UpdatedOn: "2017-04-11",
    VehicleType: "Trailer",
    WMI: "2M9004",
  },
  {
    Country: "UNITED STATES (USA)",
    CreatedOn: "2017-03-09",
    DateAvailableToPublic: "2017-03-09",
    Id: 993,
    Name: "HONDA MFG., INDIANA., LLC.",
    UpdatedOn: null,
    VehicleType: "Multipurpose Passenger Vehicle (MPV)",
    WMI: "7FA",
  },
  {
    Country: "UNITED STATES (USA)",
    CreatedOn: "2017-05-08",
    DateAvailableToPublic: "2017-05-08",
    Id: 8769,
    Name: "GRYPHON BIKES & CHOPPERS",
    UpdatedOn: null,
    VehicleType: "Motorcycle",
    WMI: "1G9340",
  },
  {
    Country: "CHINA",
    CreatedOn: "2017-05-17",
    DateAvailableToPublic: "2017-05-17",
    Id: 9042,
    Name: "JIANGMEN ZHONGYU MOTOR (GROUP) CO., LTD.",
    UpdatedOn: null,
    VehicleType: "Motorcycle",
    WMI: "LMF",
  },
  {
    Country: "CHINA",
    CreatedOn: "2017-05-23",
    DateAvailableToPublic: "2017-05-23",
    Id: 16100,
    Name: "JHC NEW ENERGY VEHICLE HONGKONG CO.,LTD",
    UpdatedOn: null,
    VehicleType: "Low Speed Vehicle (LSV)",
    WMI: "R1A",
  },
  {
    Country: "CHINA",
    CreatedOn: "2017-06-27",
    DateAvailableToPublic: "2017-06-27",
    Id: 16653,
    Name: "NANCHANG AIRCRAFT MFG. CO ( HONGDU MACHINERY PLANT)",
    UpdatedOn: null,
    VehicleType: "Motorcycle",
    WMI: "LPP",
  },
  {
    Country: "UNITED KINGDOM (UK)",
    CreatedOn: "2017-11-03",
    DateAvailableToPublic: "2017-11-03",
    Id: 1879,
    Name: "HONNOR MARINE LTD",
    UpdatedOn: null,
    VehicleType: "Trailer",
    WMI: "SA9112",
  },
  {
    Country: "CHINA",
    CreatedOn: "2018-01-17",
    DateAvailableToPublic: "2018-01-17",
    Id: 17562,
    Name: "HONGDU ELECTRIC VEHICLE HONGKONG CO.,LIMITED",
    UpdatedOn: null,
    VehicleType: "Motorcycle",
    WMI: "R2L",
  },
  {
    Country: "CHINA",
    CreatedOn: "2018-01-25",
    DateAvailableToPublic: "2018-01-25",
    Id: 9877,
    Name: "HONGDOU GROUP CHITUMA MOTORCYCLE COMPANY",
    UpdatedOn: null,
    VehicleType: "Motorcycle",
    WMI: "LE6",
  },
  {
    Country: "UNITED STATES (USA)",
    CreatedOn: "2018-03-14",
    DateAvailableToPublic: "2018-03-14",
    Id: 3847,
    Name: "MARATHON EQUIPMENT COMPANY (DEL)",
    UpdatedOn: null,
    VehicleType: "Trailer",
    WMI: "1M9371",
  },
  {
    Country: "CHINA",
    CreatedOn: "2018-05-11",
    DateAvailableToPublic: "2018-05-11",
    Id: 17686,
    Name: "CHONGQING HUANGHE MOTORCYCLE CO.,LTD. ",
    UpdatedOn: null,
    VehicleType: "Motorcycle",
    WMI: "LDU",
  },
  {
    Country: "CHINA",
    CreatedOn: "2018-08-10",
    DateAvailableToPublic: "2018-08-10",
    Id: 18570,
    Name: "CHONGQING LIYANG JIAYU MOTORCYCLE CO., LTD.",
    UpdatedOn: null,
    VehicleType: "Motorcycle",
    WMI: "LC4",
  },
  {
    Country: "CHINA",
    CreatedOn: "2020-08-31",
    DateAvailableToPublic: "2020-08-31",
    Id: 20032,
    Name: "ELYX SMART TECHNOLOGY HOLDINGS (HONGKONG) LIMITED",
    UpdatedOn: null,
    VehicleType: "Motorcycle",
    WMI: "R4N",
  },
]



function WMIFilters(props) {
  const { 
    countries,
    onFilterChange,
  } = props
  
  return (
    <section 
      className="filters"
      aria-labelledby="filters-header">
      <header id="filters-header">
        {'Filters'}
      </header>
      
      <ul>
        {countries.map(category => (
          <ul key={category}>
            <label>
              <input 
                onChange={onFilterChange}
                type="checkbox"
                value={category} />
              {category}
            </label>
          </ul>
        ))}
      </ul>
    </section>
  )
}

function WMI(props) {
  const { wmi } = props

  
  return (
    
    <tr
      key={wmi.id}
  >
      
        <td>{wmi.Name}</td>
        <td>{wmi.WMI}</td>
        <td>{wmi.Country}</td>
        <td>{wmi.CreatedOn}</td>
        <td>{wmi.VehicleType}</td>
        
      
    </tr>
  )
}

function WMIList(props) {
  const { newData } = props
  const [searchedData, setSearchedData] = useState(newData);

  const keys = ["Name", "WMI", "Country", "CreatedOn", "VehicleType"];

  const handleSearch = (e) => {
    let value = e.target.value.toUpperCase();
    let result = [];
    // console.log(value);
    result = newData.filter((data) => {
      return data.WMI.search(value) !== -1;
    });
    setSearchedData(result);
  };
  
  return (
    <>
          <header>WMI Data - Honda | Total:{searchedData.length}</header>
          <label>Search for WMI:</label>
        <input type="text" onChange={(e) => handleSearch(e)} />
    <thead>
            <tr>
              {keys.map((k) => (
                <th key={k}>{k}</th>
              ))}
            </tr>
          </thead>
    <table>
    <td >
      {newData.map(wmi => (
        <WMI wmi={wmi} />
      ))}
    </td>
    </table>
    </>
  )
}

function App() {
  const [state, setState] = useState({
    newData: allData,
    filters: new Set(),
  })
  
  const handleFilterChange = useCallback(event => {
    setState(previousState => {
      let filters = new Set(previousState.filters)
      let newData = allData
      
      if (event.target.checked) {
        filters.add(event.target.value)
      } else {
        filters.delete(event.target.value)
      }
      
      if (filters.size) {
        newData = newData.filter(wmi => {
          return filters.has(wmi.Country)
        })
      }
      
      return {
        filters,
        newData,
      }
    })
  }, [setState])
  
  return (
    <main>
      <WMIFilters 
        countries={COUNTRIES}
        onFilterChange={handleFilterChange}/>
      <WMIList newData={state.newData} />
    </main>
  )
}

export default App;
