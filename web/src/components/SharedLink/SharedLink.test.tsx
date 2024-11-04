import { render, screen } from '@redwoodjs/testing/web'

import SharedLink from './SharedLink'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SharedLink', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SharedLink title={''}  username={''}  link={''} />)
    }).not.toThrow()
  })

  it ('has title', () => {
    const title = "My Link"
    render(<SharedLink title={'My Link'}  username={'yabishmish'}  link={'https://google.com'} />)
  //act
    const titleElement = screen.getByText(title)
  //assert
  expect(titleElement).toBeInTheDocument()
  })

  it ('has 0 points by default',() => {
    render(<SharedLink title={'My Link'}  username={'yabishmish'}  link={'https://google.com'} />)
  //act
    const points = screen.getByTestId('point')
  //assert
  expect(points).toBeInTheDocument()

  })
  it.skip ('links to the person that submitted the link', () => {})
  it.skip ('has a comment count', () => {})
  it.skip ('links to an individual shared link page', () => {})
  it.skip ('links to the original url', () => {})
  it ('votes up', () => {
    render(<SharedLink title={'My Link'}  username={'yabishmish'}  link={'https://google.com'} />)
    const voteUp = screen.getByText('Vote Up')
    expect(voteUp).toBeInTheDocument()
  })
})
