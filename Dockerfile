FROM nginx:alpine

# Copy semua file ke root direktori Nginx
COPY . /usr/share/nginx/html

# Copy file konfigurasi Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80
