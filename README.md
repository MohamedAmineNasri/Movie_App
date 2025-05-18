<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie Explorer App</title>
    <style>
        :root {
            --primary: #030014;
            --secondary: #151312;
            --accent: #AB8BFF;
            --text-light: #FFFFFF;
            --text-gray: #A8B5DB;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: var(--text-light);
            background-color: var(--primary);
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
        }
        
        header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid var(--accent);
        }
        
        h1 {
            color: var(--accent);
            font-size: 2.5rem;
            margin-bottom: 10px;
        }
        
        h2 {
            color: var(--accent);
            border-left: 4px solid var(--accent);
            padding-left: 10px;
            margin-top: 30px;
        }
        
        .badge {
            display: inline-block;
            background-color: rgba(171, 139, 255, 0.2);
            color: var(--accent);
            padding: 3px 8px;
            border-radius: 4px;
            font-size: 0.9rem;
            margin-right: 8px;
            margin-bottom: 8px;
        }
        
        code {
            background-color: rgba(0,0,0,0.3);
            padding: 2px 4px;
            border-radius: 3px;
            font-family: monospace;
        }
        
        pre {
            background-color: rgba(0,0,0,0.3);
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
        }
        
        a {
            color: var(--accent);
            text-decoration: none;
        }
        
        a:hover {
            text-decoration: underline;
        }
        
        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        
        .feature-card {
            background-color: rgba(21, 19, 18, 0.5);
            padding: 20px;
            border-radius: 8px;
            border-left: 3px solid var(--accent);
        }
        
        .file-tree {
            background-color: rgba(21, 19, 18, 0.5);
            padding: 15px;
            border-radius: 8px;
            font-family: monospace;
            line-height: 1.8;
        }
        
        .screenshot {
            width: 100%;
            max-width: 300px;
            border-radius: 8px;
            margin: 10px 0;
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }
        
        @media (max-width: 768px) {
            body {
                padding: 15px;
            }
            
            h1 {
                font-size: 2rem;
            }
            
            .feature-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>Movie Explorer App</h1>
        <p>A modern mobile application for discovering and exploring movies, built with React Native and Expo.</p>
    </header>

    <section>
        <h2>✨ Features</h2>
        <div class="feature-grid">
            <div class="feature-card">
                <h3>🎬 Movie Discovery</h3>
                <p>Browse trending movies in a beautiful grid layout with high-quality posters.</p>
            </div>
            <div class="feature-card">
                <h3>🔍 Smart Search</h3>
                <p>Find movies by title with debounced search functionality for optimal performance.</p>
            </div>
            <div class="feature-card">
                <h3>📱 Responsive Design</h3>
                <p>Fully responsive layout that works on all mobile device sizes.</p>
            </div>
            <div class="feature-card">
                <h3>🎨 Custom UI</h3>
                <p>Beautiful animated tab navigation and carefully crafted user interface.</p>
            </div>
            <div class="feature-card">
                <h3>📊 Detailed Views</h3>
                <p>Comprehensive movie details including ratings, reviews, and production info.</p>
            </div>
        </div>
    </section>

    <section>
        <h2>🛠 Technologies Used</h2>
        <p>
            <span class="badge">React Native</span>
            <span class="badge">Expo</span>
            <span class="badge">TypeScript</span>
            <span class="badge">Tailwind CSS</span>
            <span class="badge">TMDB API</span>
            <span class="badge">Expo Router</span>
        </p>
    </section>

    <section>
        <h2>🚀 Installation</h2>
        <ol>
            <li>Clone the repository:
                <pre><code>git clone https://github.com/yourusername/movie-explorer.git
cd movie-explorer</code></pre>
            </li>
            <li>Install dependencies:
                <pre><code>npm install
# or
yarn install</code></pre>
            </li>
            <li>Set up environment variables:
                <p>Create a <code>.env</code> file in the root directory with your TMDB API key:</p>
                <pre><code>EXPO_PUBLIC_MOVIE_API_KEY=your_tmdb_api_key_here</code></pre>
            </li>
            <li>Run the app:
                <pre><code>npm start
# or
yarn start</code></pre>
            </li>
        </ol>
    </section>

    <section>
        <h2>📂 Project Structure</h2>
        <div class="file-tree">
            /src<br>
            &nbsp;&nbsp;/components<br>
            &nbsp;&nbsp;&nbsp;&nbsp;MovieCard.tsx&nbsp;&nbsp;&nbsp;&nbsp;# Movie grid item component<br>
            &nbsp;&nbsp;&nbsp;&nbsp;SearchBar.tsx&nbsp;&nbsp;&nbsp;&nbsp;# Search input component<br>
            &nbsp;&nbsp;/constants<br>
            &nbsp;&nbsp;&nbsp;&nbsp;icons.ts&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# App icon assets<br>
            &nbsp;&nbsp;&nbsp;&nbsp;images.ts&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# App image assets<br>
            &nbsp;&nbsp;/services<br>
            &nbsp;&nbsp;&nbsp;&nbsp;api.ts&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# TMDB API service<br>
            &nbsp;&nbsp;&nbsp;&nbsp;useFetch.ts&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Custom fetch hook<br>
            /app<br>
            &nbsp;&nbsp;(tabs)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Tab navigation<br>
            &nbsp;&nbsp;&nbsp;&nbsp;index.tsx&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Home screen<br>
            &nbsp;&nbsp;&nbsp;&nbsp;search.tsx&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Search screen<br>
            &nbsp;&nbsp;&nbsp;&nbsp;saved.tsx&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Saved movies screen<br>
            &nbsp;&nbsp;&nbsp;&nbsp;profile.tsx&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# User profile screen<br>
            &nbsp;&nbsp;movie/[id].tsx&nbsp;&nbsp;&nbsp;# Movie details screen
        </div>
    </section>

    <section>
        <h2>📱 Screens</h2>
        
        <h3>Home Screen</h3>
        <ul>
            <li>Displays trending movies in a grid layout</li>
            <li>Features a search bar to navigate to search screen</li>
        </ul>
        
        <h3>Search Screen</h3>
        <ul>
            <li>Full-text search functionality</li>
            <li>Debounced search requests</li>
            <li>Results displayed in 3-column grid</li>
        </ul>
        
        <h3>Movie Details Screen</h3>
        <ul>
            <li>Detailed movie information</li>
            <li>High-quality poster image</li>
            <li>Metadata including:
                <ul>
                    <li>Release year</li>
                    <li>Runtime</li>
                    <li>Rating</li>
                    <li>Overview</li>
                    <li>Genres</li>
                    <li>Budget and revenue</li>
                    <li>Production companies</li>
                </ul>
            </li>
        </ul>
        
        <h3>Saved & Profile Screens</h3>
        <p>Placeholder screens for future functionality</p>
    </section>

    <section>
        <h2>🪝 Custom Hooks</h2>
        
        <h3><code>useFetch</code></h3>
        <p>A reusable hook for API requests that handles:</p>
        <ul>
            <li>Loading states</li>
            <li>Error handling</li>
            <li>Data caching</li>
            <li>Automatic/manual refetching</li>
        </ul>
    </section>

    <section>
        <h2>🔌 API Integration</h2>
        <p>The app uses the TMDB (The Movie Database) API for:</p>
        <ul>
            <li>Fetching trending movies (<code>/discover/movie</code>)</li>
            <li>Searching movies (<code>/search/movie</code>)</li>
            <li>Getting movie details (<code>/movie/{id}</code>)</li>
        </ul>
    </section>

    <section>
        <h2>🎨 Styling</h2>
        <p>The app uses Tailwind CSS via NativeWind for styling, with:</p>
        <ul>
            <li>Dark color scheme</li>
            <li>Custom accent colors</li>
            <li>Responsive layouts</li>
            <li>Animated tab bar</li>
        </ul>
    </section>

    <section>
        <h2>🤝 Contributing</h2>
        <p>Contributions are welcome! Please open an issue or submit a pull request.</p>
    </section>

    <section>
        <h2>📜 License</h2>
        <p><a href="https://choosealicense.com/licenses/mit/" target="_blank">MIT</a></p>
    </section>
</body>
</html>