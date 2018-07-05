import { TvSeriesModule } from './tv-series.module';

describe('TvSeriesModule', () => {
  let tvSeriesModule: TvSeriesModule;

  beforeEach(() => {
    tvSeriesModule = new TvSeriesModule();
  });

  it('should create an instance', () => {
    expect(tvSeriesModule).toBeTruthy();
  });
});
