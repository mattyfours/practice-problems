import problem from './problem-2'

test('a', async () => {
  expect(await problem(['HHD234', 'JHD890', 'IHD567'])).toEqual([
    'JHD890',
    'HHD234',
    'IHD567'
  ])
})

test('b', async () => {
  expect(await problem(['EHD837', 'VV89W7', 'JHD890', 'IHD567'])).toEqual([
    'JHD890',
    'EHD837',
    'IHD567'
  ])
})
