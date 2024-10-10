export interface CreateCompanyDto {
  chainNumber?: string;

  address?: string;

  name?: string;

  fiscalId?: string;

  type?: string;

  totalTxs?: number;

  availableTxs?: number;

  taxIDNumber?: string;

  contactName?: string;

  contactNumber?: string;

  email?: string;

  phone?: string;

  isDarwin: boolean;

  // Settings
  wallet?: string;

  cityId?: number;

  language?: string;

  detailLocation?: string;

  zipCode?: string;

  timeZoneId?: number;
}
