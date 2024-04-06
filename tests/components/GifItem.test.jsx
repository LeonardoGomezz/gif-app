import { render, screen } from "@testing-library/react"
import { GiftItem } from "../../src/components/GiftItem"

describe('Pruebas en <GifItem/>', () =>{
  const title = 'saitama'
  const url = 'https://cdn.pixabay.com/photo/2023/08/24/19/58/saitama-8211499_960_720.png'

  test('debe hacer march con el snap shot', () => { 
   const {container} = render( <GiftItem title={title} url={url}/>)
   expect(container).toMatchSnapshot()
  })

  test('debe mostrar la imagen y el alt indicado', () => { 
    render( <GiftItem title={title} url={url}/>)
    // screen.debug()
    // expect((screen.getByRole('img').src)).toBe( url )
    const { src, alt } = screen.getByRole('img')
    expect( src ).toBe( url )
    expect( alt ).toBe( alt )
   })

   test('Debe mostrar el titulo del componente', () => { 
    render( <GiftItem title={title} url={url}/>)
    expect( screen.getByText( title ) ).toBeTruthy()
    })
})