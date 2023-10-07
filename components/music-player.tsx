"use client";

import * as React from "react";

import { Box, Center, Flex, Text } from "@chakra-ui/layout";
import {
  ButtonGroup,
  IconButton,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from "@chakra-ui/react";
import {
  MdShuffle,
  MdSkipPrevious,
  MdSkipNext,
  MdOutlinePlayCircleFilled,
  MdOutlinePauseCircleFilled,
  MdOutlineRepeat,
} from "react-icons/md";
import ReactHowler from "react-howler";

export function MusicPlayer() {
  const [playing, setPlaying] = React.useState<boolean>(false);
  const soundRef = React.useRef();

  let activeSong = {
    url: "",
  };

  const setPlayState = (value: boolean) => {
    setPlaying(value);
  };

  const onShuffle = () => {
    //
  };

  const onRepeat = () => {
    //
  };

  const prevSong = () => {
    //
  };

  const nextSong = () => {
    //
  };

  const onEnd = () => {
    //
  };

  const onLoad = () => {
    //
  };

  const onSeek = (e) => {
    //
  };

  return (
    <Box>
      <Box>
        {/* <ReactHowler
          playing={playing}
          src={activeSong?.url}
          ref={soundRef}
          onLoad={onLoad}
          onEnd={onEnd}
        /> */}
      </Box>
      <Center color="gray.600">
        <ButtonGroup>
          <IconButton
            outline="none"
            variant="link"
            aria-label="shuffle"
            fontSize="24px"
            color={"gray.600"}
            onClick={onShuffle}
            icon={<MdShuffle />}
          />
          <IconButton
            outline="none"
            variant="link"
            aria-label="prev"
            fontSize="24px"
            icon={<MdSkipPrevious />}
            onClick={prevSong}
          />
          {playing ? (
            <IconButton
              outline="none"
              variant="link"
              aria-label="play"
              fontSize="40px"
              color="white"
              icon={<MdOutlinePauseCircleFilled />}
              onClick={() => {}}
            />
          ) : (
            <IconButton
              outline="none"
              variant="link"
              aria-label="play"
              fontSize="40px"
              color="white"
              icon={<MdOutlinePlayCircleFilled />}
              onClick={() => {}}
            />
          )}

          <IconButton
            outline="none"
            variant="link"
            aria-label="next"
            fontSize="24px"
            icon={<MdSkipNext />}
            onClick={nextSong}
          />
          <IconButton
            outline="none"
            variant="link"
            aria-label="repeat"
            fontSize="24px"
            color={"gray.600"}
            onClick={onRepeat}
            icon={<MdOutlineRepeat />}
          />
        </ButtonGroup>
      </Center>
      <Box color="gray.600">
        <Flex justify="center" align="center">
          <Box width="10%">
            <Text fontSize="xs">0.00</Text>
          </Box>
          <Box width="80%">
            <RangeSlider
              aria-label={["min", "max"]}
              step={0.1}
              min={0}
              max={0}
              id="player-range"
              onChange={() => {}}
              value={[2.23]}
              onChangeStart={() => {}}
              onChangeEnd={() => {}}
            >
              <RangeSliderTrack bg="gray.800">
                <RangeSliderFilledTrack bg="gray.600" />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
            </RangeSlider>
          </Box>
          <Box width="10%" textAlign="right">
            <Text fontSize="xs">4.23</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
