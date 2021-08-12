import { MegabytesPipe } from './megabytes.pipe';

describe('MegabytesPipe', () => {
  it('create an instance', () => {
    const pipe = new MegabytesPipe();
    expect(pipe).toBeTruthy();
  });
});
