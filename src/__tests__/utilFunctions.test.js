import { shortenText } from '../utils/functions'
import { wordCount, attachUserName } from '../../server/utils'
import { shortText, longText, posts, users } from './__data__/testData'

test('shortenText will not alter string under 100 characters', ()=>{
  expect(shortenText(shortText)).toHaveLength(shortText.length)
})

test('shortenText will alter text over 100 characters and add 3 periods at the end', ()=>{
  const shortened = shortenText(longText) 
  expect(shortened).not.toHaveLength(longText.length)

  expect(shortened.slice(-3)).toBe('...')
})

test('wordCount will return correct total word count for posts array', ()=>{
  expect(wordCount(posts)).toBe(233)
})

test('attachUserName has property displayName in the first index', ()=>{
  const newPosts = attachUserName(users, posts)
  expect(newPosts[0]).toHaveProperty('displayName')
})

test('attachUserName should remove any post with no matching user', ()=>{
  const newPosts = attachUserName(users, posts)
  const deletedPost = posts[5]
  expect(newPosts).not.toContainEqual(deletedPost)
})