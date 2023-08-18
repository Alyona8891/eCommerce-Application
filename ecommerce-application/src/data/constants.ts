export const MINIMAL_ACCESS_AGE = 13;

export const emailRegExp =
  /^(([^!@#$%^&*<>()[\]\\/|.,;:\s@"]+(\.[^!@#$%^&*<>()[\]\\/|.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const passwordRegExp =
  /[^a-zA-Z0-9!@#№$%^&*~`+-=_?<>(){}[\]\\/|.,;:\s@"']/g;

export const domainRegExp = /@(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})$/;

export const textRegExp = /^[a-zA-Z]+[a-zA-Z']?$/;

export const langRegExp = /[^ a-zA-Z0-9@.]/g;

export const streetRegExp = /[^ a-zA-Z0-9.-]/g;

export const countriesData = [
  { code: 'AX', name: 'AALAND ISLANDS' },
  { code: 'DZ', name: 'ALGERIA' },
  { code: 'AS', name: 'AMERICAN SAMOA' },
  { code: 'AD', name: 'ANDORRA' },
  { code: 'AG', name: 'ANTIGUA AND BARBUDA' },
  { code: 'AR', name: 'ARGENTINA' },
  { code: 'AM', name: 'ARMENIA' },
  { code: 'AU', name: 'AUSTRALIA' },
  { code: 'AT', name: 'AUSTRIA' },
  { code: 'AZ', name: 'AZERBAIJAN' },
  { code: 'BH', name: 'BAHRAIN' },
  { code: 'BD', name: 'BANGLADESH' },
  { code: 'BB', name: 'BARBADOS' },
  { code: 'BY', name: 'BELARUS' },
  { code: 'BE', name: 'BELGIUM' },
  { code: 'BM', name: 'BERMUDA' },
  { code: 'BA', name: 'BOSNIA AND HERZEGOWINA' },
  { code: 'BR', name: 'BRAZIL' },
  { code: 'IO', name: 'BRITISH INDIAN OCEAN TERRITORY' },
  { code: 'BN', name: 'BRUNEI DARUSSALAM' },
  { code: 'BG', name: 'BULGARIA' },
  { code: 'KH', name: 'CAMBODIA' },
  { code: 'CA', name: 'CANADA' },
  { code: 'CV', name: 'CAPE VERDE' },
  { code: 'KY', name: 'CAYMAN ISLANDS' },
  { code: 'CL', name: 'CHILE' },
  { code: 'CN', name: 'CHINA' },
  { code: 'CX', name: 'CHRISTMAS ISLAND' },
  { code: 'CK', name: 'COOK ISLANDS' },
  { code: 'CR', name: 'COSTA RICA' },
  { code: 'CY', name: 'CYPRUS' },
  { code: 'CZ', name: 'CZECH REPUBLIC' },
  { code: 'DK', name: 'DENMARK' },
  { code: 'DO', name: 'DOMINICAN REPUBLIC' },
  { code: 'EC', name: 'ECUADOR' },
  { code: 'EG', name: 'EGYPT' },
  { code: 'EE', name: 'ESTONIA' },
  { code: 'ET', name: 'ETHIOPIA' },
  { code: 'FO', name: 'FAROE ISLANDS' },
  { code: 'FI', name: 'FINLAND' },
  { code: 'FR', name: 'FRANCE' },
  { code: 'GF', name: 'FRENCH GUIANA' },
  { code: 'PF', name: 'FRENCH POLYNESIA' },
  { code: 'GE', name: 'GEORGIA' },
  { code: 'DE', name: 'GERMANY' },
  { code: 'GR', name: 'GREECE' },
  { code: 'GL', name: 'GREENLAND' },
  { code: 'GP', name: 'GUADELOUPE' },
  { code: 'GU', name: 'GUAM' },
  { code: 'GT', name: 'GUATEMALA' },
  { code: 'GN', name: 'GUINEA' },
  { code: 'GW', name: 'GUINEA-BISSAU' },
  { code: 'HT', name: 'HAITI' },
  { code: 'HM', name: 'HEARD AND MC DONALD ISLANDS' },
  { code: 'HN', name: 'HONDURAS' },
  { code: 'HU', name: 'HUNGARY' },
  { code: 'IS', name: 'ICELAND' },
  { code: 'IN', name: 'INDIA' },
  { code: 'ID', name: 'INDONESIA' },
  { code: 'IQ', name: 'IRAQ' },
  { code: 'IE', name: 'IRELAND' },
  { code: 'IL', name: 'ISRAEL' },
  { code: 'IT', name: 'ITALY' },
  { code: 'JP', name: 'JAPAN' },
  { code: 'JO', name: 'JORDAN' },
  { code: 'KZ', name: 'KAZAKHSTAN' },
  { code: 'KE', name: 'KENYA' },
  { code: 'KW', name: 'KUWAIT' },
  { code: 'KG', name: 'KYRGYZSTAN' },
  { code: 'LV', name: 'LATVIA' },
  { code: 'LB', name: 'LEBANON' },
  { code: 'LS', name: 'LESOTHO' },
  { code: 'LR', name: 'LIBERIA' },
  { code: 'LI', name: 'LIECHTENSTEIN' },
  { code: 'LT', name: 'LITHUANIA' },
  { code: 'LU', name: 'LUXEMBOURG' },
  { code: 'MG', name: 'MADAGASCAR' },
  { code: 'MY', name: 'MALAYSIA' },
  { code: 'MV', name: 'MALDIVES' },
  { code: 'MT', name: 'MALTA' },
  { code: 'MH', name: 'MARSHALL  ISLANDS' },
  { code: 'MQ', name: 'MARTINIQUE' },
  { code: 'MU', name: 'MAURITIUS' },
  { code: 'YT', name: 'MAYOTTE' },
  { code: 'MX', name: 'MEXICO' },
  { code: 'MC', name: 'MONACO' },
  { code: 'MN', name: 'MONGOLIA' },
  { code: 'MA', name: 'MOROCCO' },
  { code: 'NP', name: 'NEPAL' },
  { code: 'NL', name: 'NETHERLANDS' },
  { code: 'NC', name: 'NEW CALEDONIA' },
  { code: 'NZ', name: 'NEW ZEALAND' },
  { code: 'NI', name: 'NICARAGUA' },
  { code: 'NE', name: 'NIGER' },
  { code: 'NG', name: 'NIGERIA' },
  { code: 'NF', name: 'NORFOLK ISLAND' },
  { code: 'MP', name: 'NORTHERN MARIANA ISLANDS' },
  { code: 'NO', name: 'NORWAY' },
  { code: 'OM', name: 'OMAN' },
  { code: 'PK', name: 'PAKISTAN' },
  { code: 'PW', name: 'PALAU' },
  { code: 'PA', name: 'PANAMA' },
  { code: 'PG', name: 'PAPUA NEW GUINEA' },
  { code: 'PY', name: 'PARAGUAY' },
  { code: 'PE', name: 'PERU' },
  { code: 'PH', name: 'PHILIPPINES' },
  { code: 'PN', name: 'PITCAIRN' },
  { code: 'PL', name: 'POLAND' },
  { code: 'PT', name: 'PORTUGAL' },
  { code: 'PR', name: 'PUERTO RICO' },
  { code: 'RE', name: 'REUNION' },
  { code: 'RO', name: 'ROMANIA' },
  { code: 'RU', name: 'RUSSIAN FEDERATION' },
  { code: 'SH', name: 'SAINT HELENA' },
  { code: 'PM', name: 'SAINT PIERRE AND MIQUELON' },
  { code: 'SM', name: 'SAN MARINO' },
  { code: 'SA', name: 'SAUDI ARABIA' },
  { code: 'SN', name: 'SENEGAL' },
  { code: 'CS', name: 'SERBIA AND MONTENEGRO' },
  { code: 'SG', name: 'SINGAPORE' },
  { code: 'SK', name: 'SLOVAKIA' },
  { code: 'SI', name: 'SLOVENIA' },
  { code: 'SO', name: 'SOMALIA' },
  { code: 'ZA', name: 'SOUTH AFRICA' },
  { code: 'GS', name: 'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS' },
  { code: 'ES', name: 'SPAIN' },
  { code: 'LK', name: 'SRI LANKA' },
  { code: 'SJ', name: 'SVALBARD AND JAN MAYEN ISLANDS' },
  { code: 'SZ', name: 'SWAZILAND' },
  { code: 'SE', name: 'SWEDEN' },
  { code: 'CH', name: 'SWITZERLAND' },
  { code: 'TW', name: 'TAIWAN' },
  { code: 'TJ', name: 'TAJIKISTAN' },
  { code: 'TH', name: 'THAILAND' },
  { code: 'TN', name: 'TUNISIA' },
  { code: 'TR', name: 'TURKEY' },
  { code: 'TM', name: 'TURKMENISTAN' },
  { code: 'TC', name: 'TURKS AND CAICOS ISLANDS' },
  { code: 'UA', name: 'UKRAINE' },
  { code: 'GB', name: 'UNITED KINGDOM' },
  { code: 'US', name: 'UNITED STATES' },
  { code: 'UY', name: 'URUGUAY' },
  { code: 'UZ', name: 'UZBEKISTAN' },
  { code: 'VE', name: 'VENEZUELA' },
  { code: 'VN', name: 'VIETNAM' },
  { code: 'WF', name: 'WALLIS AND FUTUNA ISLANDS' },
  { code: 'ZM', name: 'ZAMBIA' },
];