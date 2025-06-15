-- Remove unused fields from database tables

-- Remove epoch_number from lst_apy_data
ALTER TABLE lst_apy_data DROP COLUMN IF EXISTS epoch_number;

-- Remove circulating_supply from lst_holder_data
ALTER TABLE lst_holder_data DROP COLUMN IF EXISTS circulating_supply;

-- Remove tvl_currency from lst_tvl_data
ALTER TABLE lst_tvl_data DROP COLUMN IF EXISTS tvl_currency;

-- Update unique constraints since epoch_number was part of a unique constraint
ALTER TABLE lst_apy_data DROP CONSTRAINT IF EXISTS lst_apy_data_lst_symbol_apy_type_epoch_number_key;
ALTER TABLE lst_apy_data ADD CONSTRAINT lst_apy_data_unique_symbol_type UNIQUE(lst_symbol, apy_type); 