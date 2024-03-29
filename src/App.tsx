import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import Gameheading from "./components/Gameheading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOder: string;
  searchtext: string;
}

function App() {
  const [gameQuerry, setGameQuerry] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(searchtext) => setGameQuerry({ ...gameQuerry, searchtext })} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selecredGenre={gameQuerry.genre}
            onSelectGenre={(genre) => setGameQuerry({ ...gameQuerry, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <Gameheading gameQuery={gameQuerry} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
                selectedPlatform={gameQuerry.platform}
                onSelectPlatform={(platform) => setGameQuerry({ ...gameQuerry, platform })}
              />
            </Box>
            <SortSelector
              sortOrder={gameQuerry.sortOder}
              onSelectedSortOrder={(sortOder) => setGameQuerry({ ...gameQuerry, sortOder })}
            />
          </Flex>
        </Box>
        <GameGrid gameQuerry={gameQuerry} />
      </GridItem>
    </Grid>
  );
}

export default App;
