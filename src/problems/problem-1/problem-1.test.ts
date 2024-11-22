import problem1 from './problem-1'

test('a', async () => {
  expect(await problem1(['HHD234', 'JHD890', 'IHD567'])).toEqual([
    'JHD890',
    'HHD234',
    'IHD567'
  ])
})

test('b', async () => {
  expect(await problem1(['EHD837', 'VV89W7', 'JHD890', 'IHD567'])).toEqual([
    'JHD890',
    'EHD837',
    'IHD567'
  ])
})
