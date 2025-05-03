export function logAllLevels(logger) {
    logger.debug('Debug log desde service');
    logger.http('HTTP log desde service');
    logger.info('Info log desde service');
    logger.warning('Warning log desde service');
    logger.error('Error log desde service');
    logger.fatal('Fatal log desde service');
  }