import  { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
// Mock data - replace with your actual images
const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", title: "Mountain Range", category: "Nature" },
  { id: 2, src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e", title: "Forest Path", category: "Nature" },
  { id: 3, src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05", title: "Foggy Valley", category: "Atmospheric" },
  { id: 4, src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d", title: "Wilderness", category: "Nature" },
  { id: 5, src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6", title: "Coding Setup", category: "Tech" },
  { id: 6, src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085", title: "Laptop Work", category: "Tech" },
];

const Gallery = () => {
  const [, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Gallery</h1>
        <p className="text-muted-foreground">A collection of captured moments and digital art.</p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image) => (
          <Dialog key={image.id}>
            <DialogTrigger asChild>
              <Card 
                className="overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300 group"
                onClick={() => setSelectedImg(image.src)}
              >
                <CardContent className="p-0 relative">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-white font-semibold text-lg">{image.title}</p>
                      <p className="text-white/80 text-sm">{image.category}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>

            {/* Lightbox Modal */}
            <DialogContent className="max-w-4xl bg-transparent border-none p-0 shadow-none">
              <div className="relative flex items-center justify-center">
                <img
                  src={image.src}
                  alt={image.title}
                  className="max-h-[85vh] w-auto rounded-lg shadow-2xl"
                />
              </div>
              <div className="text-center mt-4 text-white">
                <h2 className="text-xl font-medium">{image.title}</h2>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>

      {images.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground italic">No images found in the gallery.</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;