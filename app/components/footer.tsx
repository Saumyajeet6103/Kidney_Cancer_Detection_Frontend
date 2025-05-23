const Footer = () => {
    return (
        <footer className='mt-24 flex h-32 flex-col items-center justify-between bg-gradient-to-b from-transparent to-primary/20'>
            <div className='p-5 text-center'>
            Your health matters. Join us in revolutionizing AI healthcare. Together, we can make a difference! {' '}
                <span className='whitespace-nowrap '>
                    <a
                        href='mailto:ferjani.nader@hotmail.fr'
                        className='font-medium text-primary brightness-150 hover:underline'
                    >
                        
                    </a>{' '}
                    🚀
                </span>
            </div>
            <div className='mt-auto h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent'></div>
        </footer>
    )
}

export default Footer
