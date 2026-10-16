import React, { useState } from 'react';

/**
 * ProductImage - Reusable circular product image component
 * matching the Eagle Engineering brand design specification.
 *
 * Requirements:
 * - Clean white circular background.
 * - Thin red circular outline (#e62020 / var(--brand-red)) with a subtle shadow.
 * - Product image perfectly centered, properly sized, fully visible (object-contain)
 *   without cropping, stretching or distortion.
 * - Works automatically for all existing products AND any new products added/updated
 *   through the admin panel.
 *
 * @param {string} src - Image source URL or base64
 * @param {string} alt - Alt description
 * @param {string} [className] - Optional extra classes for container
 * @param {string} [imgClassName] - Optional extra classes for the <img> tag
 * @param {string} [size='md'] - 'sm' | 'md' | 'lg' | 'xl' | 'custom'
 * @param {boolean} [hoverZoom=true] - Whether image scales smoothly on parent/container hover
 * @param {boolean} [loading='lazy'] - Image loading attribute
 */
export const ProductImage = ({
  src,
  alt = 'Product image',
  className = '',
  imgClassName = '',
  size = 'md',
  hoverZoom = true,
  loading = 'lazy',
  decoding = 'async',
  fallbackText = ''
}) => {
  const [hasError, setHasError] = useState(false);

  // Responsive size presets for consistent alignment across pages
  // 'md' is default for grid product cards (Products.jsx)
  // 'lg' is for ProductDetails.jsx main hero image
  // 'sm' is for related products, previews, contact form, etc.
  const sizeClasses = {
    sm: 'w-24 h-24 sm:w-28 sm:h-28',
    md: 'w-44 h-44 sm:w-48 sm:h-48 md:w-52 md:h-52',
    lg: 'w-64 h-64 sm:w-76 sm:h-76 md:w-88 md:h-88 lg:w-[350px] lg:h-[350px]',
    xl: 'w-72 h-72 sm:w-88 sm:h-88 md:w-[400px] md:h-[400px]',
    custom: ''
  };

  const selectedSize = sizeClasses[size] || sizeClasses.md;

  return (
    <div 
      className={`relative rounded-full bg-white flex items-center justify-center shrink-0 border border-[#e53524] shadow-[0_3px_12px_rgba(229,53,36,0.12),0_1px_4px_rgba(0,0,0,0.04)] aspect-square overflow-hidden select-none transition-all duration-300 group-hover:shadow-[0_6px_20px_rgba(229,53,36,0.22),0_2px_8px_rgba(0,0,0,0.06)] ${selectedSize} ${className}`}
    >
      {/* Inner clean white canvas for centered, uncropped, undistorted product presentation */}
      <div className="w-[74%] h-[74%] flex items-center justify-center relative">
        {src && !hasError ? (
          <img
            src={src}
            alt={alt}
            loading={loading}
            decoding={decoding}
            onError={() => setHasError(true)}
            className={`max-w-full max-h-full object-contain pointer-events-none transition-transform duration-500 ease-out ${
              hoverZoom ? 'group-hover:scale-108' : ''
            } ${imgClassName}`}
          />
        ) : (
          <div className="text-center p-2 text-gray-400 text-xs font-medium">
            {fallbackText || alt || 'Eagle Engineering'}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductImage;
