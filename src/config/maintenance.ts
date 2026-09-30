// Check for the environment variable first. If it's not defined, fall back to this hardcoded value.
const hardcodedMaintenanceMode = false;
const envValue = import.meta.env.VITE_MAINTENANCE_MODE;
export const MAINTENANCE_MODE = 
  envValue === 'true' ? true : 
  envValue === 'false' ? false : 
  hardcodedMaintenanceMode;
