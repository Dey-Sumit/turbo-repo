type CarouselProps = {
    imageUrls?: Array<string>;
    id?: string;
};
declare const Carousel: ({ imageUrls, id, }: CarouselProps) => JSX.Element;
declare const CarouselSlide: {
    ({ children }: {
        children: React.ReactNode;
    }): JSX.Element;
    displayName: string;
};

export { Carousel, CarouselSlide as default };
