import { Link } from 'react-router-dom'

export default function UtilitiesPage() {
  return (
    <>
      <Link to='/'>Home</Link>
      <h1>Utilities</h1>
      <p>
        Bootstrap utilities are a set of utility classes that can be used to
        style content
      </p>

      <h2>Background</h2>
      <div className='bg-success bg-gradient text-white p-2'>Background</div>
      <h2 className='mt-3'>Border</h2>
      <div className='border border-2 border-primary rounded-pill px-3 py-1 mb-2'>
        Border
      </div>
      <div className='border border-2 border-primary rounded px-3 py-1 mb-2'>
        Border
      </div>
      <div className='border border-2 border-primary rounded-start px-3 py-1 mb-2'>
        Border
      </div>
      <h2 className='mt-3'>Text Colors</h2>
      <div className='text-primary'>Text</div>
      <h2 className='mt-3'>Display</h2>
      <div className='d-block bg-warning'>Block</div>
      <div className='d-inline bg-warning'>Inline</div>
      <div className='d-none'>Hide this element</div>
      <h2 className='mt-3'>Flex</h2>
      <div className='d-flex flex-column justify-content-center align-items-center bg-danger text-white'>
        <div>1</div>
        <div>2</div>
      </div>
      <h2 className='mt-3'>Float</h2>
      <p>
        These utility classes float an element to the left or right, or disable
        floating
      </p>
      <div className='float-start bg-info text-white'>Float Start</div>
      <div className='float-end bg-info text-white'>Float End</div>
      <h2 className='mt-3'>Interactions</h2>
      <p className='user-select-none'>This paragraph will not be selectable</p>
      <button className='user-select-none pe-none'>
        This button cannot be clicked
      </button>
      <h2 className='mt-3'>Opacity</h2>
      <div className='w-100 p-4 bg-primary opacity-50'></div>
      <h2 className='mt-3'>Overflow</h2>
      <code>overflow-auto</code>
      <div
        className='overflow-auto bg-dark text-success'
        style={{ height: '64px' }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quibusdam
        voluptates. Voluptatem, quibusdam. Quasi, quos. Quibusdam, quas
        voluptatem. Quisquam, quibusdam.
      </div>
      <code>overflow-hidden</code>
      <div
        className='overflow-hidden bg-dark text-success'
        style={{ height: '64px' }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quibusdam
        voluptates. Voluptatem, quibusdam. Quasi, quos. Quibusdam, quas
        voluptatem. Quisquam, quibusdam.
      </div>
      <code>overflow-scroll</code>
      <div
        className='overflow-scroll bg-dark text-success'
        style={{ height: '64px' }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quibusdam
        voluptates. Voluptatem, quibusdam. Quasi, quos. Quibusdam, quas
        voluptatem. Quisquam, quibusdam.
      </div>
      <code>overflow-visible</code>
      <div
        className='overflow-visible bg-dark text-success'
        style={{ height: '64px' }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quibusdam
        voluptates. Voluptatem, quibusdam. Quasi, quos. Quibusdam, quas
        voluptatem. Quisquam, quibusdam.
      </div>
      <h2 className='mt-4'>Position</h2>
      <div
        className='position-relative bg-light p-3'
        style={{ minHeight: '200px' }}
      >
        Relative
        <div className='position-absolute top-0 start-0 bg-secondary text-white p-2'>
          Absolute Top Left
        </div>
        <div className='position-absolute top-0 end-0 bg-secondary text-white p-2'>
          Absolute Top Right
        </div>
        <div className='position-absolute bottom-0 start-0 bg-secondary text-white p-2'>
          Absolute Bottom Left
        </div>
        <div className='position-absolute bottom-0 end-0 bg-secondary text-white p-2'>
          Absolute Bottom Right
        </div>
      </div>
      <h2 className='mt-3'>Shadows</h2>
      <div className='shadow p-3 mb-5 bg-white rounded'>Shadow</div>
      <div className='shadow-sm p-3 mb-5 bg-white rounded'>Small Shadow</div>
      <div className='shadow-lg p-3 mb-5 bg-white rounded'>Large Shadow</div>
      <div className='shadow-none p-3 mb-5 bg-white rounded'>No Shadow</div>
      <h2 className='mt-3'>Sizing</h2>
      {
        // TIP: You can also set the height of an element using the 'h-100' class and more
        // @see https://getbootstrap.com/docs/5.1/utilities/sizing/
      }
      <div className='w-25 bg-warning'>Width 25%</div>
      <div className='w-50 bg-warning'>Width 50%</div>
      <div className='w-75 bg-warning'>Width 75%</div>
      <div className='w-100 bg-warning'>Width 100%</div>
      <div className='w-auto bg-warning'>Width auto</div>
      <h2 className='mt-3'>Spacing</h2>
      {
        // TIP: You can set from 0 to 5 for the spacing. Also auto.
        // TIP: You can also set negative spacing using the 'm-n1' class and more
      }
      <div className='p-3 bg-secondary text-white'>Padding</div>
      <div className='m-3 bg-secondary text-white'>Margin</div>
      <div className='pb-4 bg-secondary text-white'>Padding Bottom</div>
      <div className='mt-4 bg-secondary text-white'>Margin Top</div>
      <div className='px-4 bg-secondary text-white'>Padding X</div>
      <div className='mx-4 bg-secondary text-white'>Margin X</div>
      <div className='py-4 bg-secondary text-white'>Padding Y</div>
      <div className='my-4 bg-secondary text-white'>Margin Y</div>
      <h2 className='mt-3'>Text</h2>
      <h4>Text alignment</h4>
      <div className='text-start'>Text Start</div>
      <div className='text-center'>Text Center</div>
      <div className='text-end'>Text End</div>
      <h4 className='mt-3'>Text wrapping and overflow</h4>
      <div
        className='badge bg-primary text-wrap'
        style={{
          width: '6rem',
        }}
      >
        This text should wrap.
      </div>
      <div
        className='text-nowrap badge bg-primary text-warning'
        style={{
          width: '6rem',
        }}
      >
        This text should NOT wrap.
      </div>
      <h4 className='mt-3'>Word break</h4>
      <p className='text-break'>
        mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
      </p>
      <h4 className='mt-3'>Text transform</h4>
      <p className='text-uppercase'>Uppercase</p>
      <p className='text-lowercase'>Lowercase</p>
      <p className='text-capitalize'>Capitalize</p>
      <h4 className='mt-3'>Font size</h4>
      <p className='fs-1'>Font Size 1</p>
      <p className='fs-2'>Font Size 2</p>
      <p className='fs-3'>Font Size 3</p>
      <p className='fs-4'>Font Size 4</p>
      <p className='fs-5'>Font Size 5</p>
      <p className='fs-6'>Font Size 6</p>
      <h4 className='mt-3'>Font weight and italics</h4>
      <p className='fw-bold'>Bold</p>
      <p className='fw-bolder'>Bolder</p>
      <p className='fw-light'>Light</p>
      <p className='fw-lighter'>Lighter</p>
      <p className='fw-normal'>Normal</p>
      <i className='fw-italic'>Italic</i>
      <h4 className='mt-3'>Line height</h4>
      <p className='lh-1'>
        This is a long paragraph written to show how the line-height of an
        element is affected by our utilities. Classes are applied to the element
        itself or sometimes the parent element. These classes can be customized
        as needed with our utility API.
      </p>
      <p className='lh-sm'>
        This is a long paragraph written to show how the line-height of an
        element is affected by our utilities. Classes are applied to the element
        itself or sometimes the parent element. These classes can be customized
        as needed with our utility API.
      </p>
      <p className='lh-base'>
        This is a long paragraph written to show how the line-height of an
        element is affected by our utilities. Classes are applied to the element
        itself or sometimes the parent element. These classes can be customized
        as needed with our utility API.
      </p>
      <p className='lh-lg'>
        This is a long paragraph written to show how the line-height of an
        element is affected by our utilities. Classes are applied to the element
        itself or sometimes the parent element. These classes can be customized
        as needed with our utility API.
      </p>
      <h4 className='mt-3'>Monospace</h4>
      <p className='font-monospace'>This is monospace</p>
      <h4 className='mt-3'>Reset color</h4>
      <a href='#' className='text-reset'>
        reset link
      </a>

      <h2 className='mt-3'>Text decoration</h2>
      <p className='text-decoration-underline'>underline</p>
      <p className='text-decoration-line-through'>line-through</p>
      <p className='text-decoration-none'>none</p>

      <h2 className='mt-3'>Vertical Align</h2>
      <span className='align-baseline'>baseline</span>
      <span className='align-top'>top</span>
      <span className='align-middle'>middle</span>
      <span className='align-bottom'>bottom</span>
      <span className='align-text-top'>text-top</span>
      <span className='align-text-bottom'>text-bottom</span>
      <h2 className='mt-3'>Visibility</h2>
      <div className='visible'>Visible</div>
      <div className='invisible'>Invisible</div>
    </>
  )
}
